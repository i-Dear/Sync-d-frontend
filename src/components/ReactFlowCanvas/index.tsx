import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Connection,
  ReactFlowInstance,
  NodeChange,
  Node,
  applyNodeChanges,
  applyEdgeChanges,
  EdgeChange,
  MarkerType,
  useReactFlow,
  PanOnScrollMode,
  Edge,
} from "reactflow";

import { useMutation, useStorage } from "~/liveblocks.config";
import FloatingEdge from "./FloatingEdge";
import StakeholderConnectionLine from "./StakeholderConnectionLine";
import StakeholderNode from "./StakeholderNode";

import "reactflow/dist/style.css";
import "./style.css";
import { nanoid } from "nanoid";
import NodeCreator from "./NodeCreator";
import FloatingArrowLabelEdge from "./FloatingArrowLabelEdge";
import InputForWhat from "./InputForWhat";
import initialNodes from "@/lib/nodes";
import MiddleNode from "./MiddleNode";
import AnnotationNode from "./AnnotationNode";

type Viewport = { x: number; y: number; zoom: number };

const StepViewport: Record<number, Viewport> = {
  5: { x: 0, y: 0, zoom: 1 },
  6: { x: 0, y: 1000, zoom: 1 },
  7: { x: 0, y: 2000, zoom: 1 },
  9: { x: 0, y: 3000, zoom: 1 },
  12: { x: 0, y: 1000, zoom: 1 },
};

const connectionLineStyle = {
  strokeWidth: 2,
  stroke: "gray",
};

const nodeTypes = {
  stakeholderNode: StakeholderNode,
  middleNode: MiddleNode,
  annotation: AnnotationNode,
};

const edgeTypes = {
  floating: FloatingEdge,
  "floating-label-arrow": FloatingArrowLabelEdge,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 1, stroke: "gray" },
  type: "floating-label-arrow",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "gray",
  },
  data: {
    endLabel: "가치",
  },
};

const Flow = ({ currentProcess }: { currentProcess: number }) => {
  const connectingNodeId = useRef<string | null>(null);
  const nodes = useStorage((root) => root.nodes);
  const edges = useStorage((root) => root.edges);
  const [nodeColor, setNodeColor] = useState("#121417");
  const reactFlow = useReactFlow();

  reactFlow.setViewport(StepViewport[currentProcess]);

  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>();

  const addNode = useMutation(
    ({ storage }, node: Node) => {
      const existingNodes = storage.get("nodes");
      storage.set("nodes", [...existingNodes, node]);
    },
    [nodes],
  );

  const onConnect = useMutation(
    ({ storage }, connection: Connection | Edge) => {
      const existingEdges = storage.get("edges");
      storage.set("edges", addEdge(connection, existingEdges));
      connectingNodeId.current = null;
    },
    [edges],
  );

  const onConnectStart = useCallback(
    (_: any, { nodeId }: { nodeId: string | null }) => {
      connectingNodeId.current = nodeId;
    },
    [nodes],
  );

  const onConnectEnd = useCallback(
    (event: any) => {
      // 노드끼리 연결했을 때는 무시 -> 가치 엣지 생성
      if (!connectingNodeId.current) return;

      // 허공에 연결했을 때만 새로운 노드 생성
      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        const id = nanoid();

        if (!reactFlowInstance) {
          return;
        }

        const position = reactFlowInstance.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });

        const previousNodeData = nodes.find(
          (node: Node) => node.id === connectingNodeId.current,
        ).data;

        const newNode = {
          id,
          position,
          type: "middleNode",
          data: {
            label: `From ${previousNodeData.label}`,
            color: previousNodeData.color,
          },
          origin: [0.5, 0.0],
          dragHandle: ".dragHandle",
        };

        addNode(newNode);

        onConnect({
          source: connectingNodeId.current,
          target: id,
          style: { stroke: previousNodeData.color },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: previousNodeData.color,
          },
          type: "default",
          id: nanoid(),
        });
      }
    },
    [reactFlowInstance, nodes],
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      if (!reactFlowInstance) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const id = nanoid();
      const newNode = {
        id,
        type,
        position,
        data: {
          label: "New Node",
          color: nodeColor,
        },
        dragHandle: ".dragHandle",
      };

      addNode(newNode);
    },
    [reactFlowInstance, nodeColor, addNode],
  );

  const onNodesChange = useMutation(
    ({ storage }, changes: NodeChange[]) => {
      storage.set("nodes", applyNodeChanges(changes, nodes));
    },
    [nodes],
  );

  const onEdgesChange = useMutation(
    ({ storage }, changes: EdgeChange[]) => {
      storage.set("edges", applyEdgeChanges(changes, edges));
    },
    [edges],
  );

  const initNodes = useMutation(({ storage }) => {
    storage.set("nodes", initialNodes);
  }, []);

  useEffect(() => {
    if (nodes.length === 0) {
      initNodes();
    }
  }, [nodes, initNodes]);

  //initNodes();

  return (
    <div className="h-full w-full grow" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onInit={setReactFlowInstance}
        onDragOver={onDragOver}
        onDrop={onDrop}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineComponent={StakeholderConnectionLine}
        connectionLineStyle={connectionLineStyle}
        panOnDrag={false}
        panOnScroll={true}
        panOnScrollMode={PanOnScrollMode.Horizontal}
      >
        <Controls />
      </ReactFlow>
      {currentProcess === 9 && (
        <NodeCreator nodeColor={nodeColor} setNodeColor={setNodeColor} />
      )}
      {currentProcess === 5 && <InputForWhat addWhatNode={addNode} />}
    </div>
  );
};

const ReactFlowCanvas = (props: { currentProcess: number }) => {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
};

export default ReactFlowCanvas;
