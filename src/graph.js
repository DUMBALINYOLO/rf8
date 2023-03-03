import React, { useState, useEffect, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";

// frame for outliers
import frame from "./images/frame.png";
import comp_host from "./images/compromised_host.png";
import comp_action from "./images/compromised_action.png";
import comp_hash from "./images/compromised_hash.png";
import comp_object from "./images/compromised_object.png";
import comp_process from "./images/compromised_process.png";
import comp_url from "./images/compromised_url.png";
import comp_user from "./images/compromised_user.png";
import comp_resource from "./images/Compromised_resource.png";
// target images
import target_user from "./images/target_user.png";
import target_host from "./images/target_host.png";
import target_action from "./images/target_action.png";
import target_hash from "./images/target_hash.png";
import target_object from "./images/target_object.png";
import target_process from "./images/target_process.png";
import target_url from "./images/target_url.png";
import target_resource from "./images/target_resource.png";
// suspect images
import suspect_user from "./images/suspect_user.png";
import suspect_action from "./images/suspect_action.png";
import suspect_hash from "./images/suspect_hash.png";
import suspect_object from "./images/suspect_object.png";
import suspect_process from "./images/suspect_process.png";
import suspect_url from "./images/suspect_url.png";
import suspect_host from "./images/suspect_host.png";
import suspect_resource from "./images/suspect_resource.png";
// signal image
import signal_stream from "./images/signal.png";

export default function ForceDirectedSignal(props) {
  const fgRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodePosition, setNodePosition] = useState(null);
  const [stopEngine, setStopEngine] = useState(false);
  const [graphData, setGraphData] = useState(props.signalData);

  const setPosition = (e) => {
    let position = {};
    position.x = e?.pageX;
    position.y = e?.pageY;
    setNodePosition(position);
  };

  useEffect(() => {}, [graphData]);

  return (
    <div onMouseMove={setPosition}>
      {/* <ForceGraph2D
            ref={fgRef}
            graphData={props.signalData}
            backgroundColor={'#18191d'}
            height={props.heightEle}
            width={props.widthEle}
            nodeId="id"
            autoPauseRedraw={true}
            onNodeHover={node => {
              if (node) {
                setSelectedNode(node)
              } else {
                setSelectedNode(null)
              }
            }}
            onNodeClick={(node, event) => {
              fgRef.current.centerAt(node.x, node.y, 1000)
              fgRef.current.zoom(6, 1000)
            }}
            onNodeDrag={node => {
              node.fx = node.x
              node.fy = node.y
              node.fz = node.z
            }}
            nodeCanvasObject={(node, ctx) => {
              const size = 15
              const img = new Image()
              // for highlighting
              const outline = new Image()
              outline.src = node.current_case === true ? frame : null
              ctx.drawImage(
                outline,
                node.x - size / 2 + 0.7,
                node.y - size / 2 + 1.5,
                size + 0.5,
                size - 0.5,
              ) //frame image
              // ctx.beginPath()
              if (node.group !== 'signal') {
                const label = node.id
                const textWidth = ctx.measureText(label).width
                const bgDimensions = [textWidth, 2].map(n => n + 10 * 0.2) // for padding
                ctx.fillStyle = '#2d343c' //background color for tag
                const fillY =
                  node.current_case === true
                    ? node.y - bgDimensions[1] / 2 + 10.5
                    : node.y - bgDimensions[1] / 2 + 9.5
                ctx.fillRect(node.x - bgDimensions[0] / 2 + 1.3, fillY, ...bgDimensions)
                const y = node.current_case === true ? node.y + 11.1 : node.y + 10.1
                // for text styling
                ctx.font = `3px mukta`
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = '#d3d3d3' //node.color;
                ctx.fillText(label, node.x + 1.3, y)
              }
              // for highlighting
              // const outline = new Image()
              // outline.src = node.current_case === true ? frame : null
              // ctx.drawImage(
              //   outline,
              //   node.x - size / 2 + 0.7,
              //   node.y - size / 2 + 1.5,
              //   size + 0.5,
              //   size - 0.5,
              // ) //frame image

              img.src =
                node.group === 'compromised'
                  ? node.field === 'Host'
                    ? comp_host
                    : node.field === 'User'
                    ? comp_user
                    : node.field === 'Action'
                    ? comp_action
                    : node.field === 'Process'
                    ? comp_process
                    : node.field === 'Hash'
                    ? comp_hash
                    : node.field === 'Object'
                    ? comp_object
                    : node.field === 'Url'
                    ? comp_url
                    : node.field === 'Resource'
                    ? comp_resource
                    : null
                  : node.group === 'signal'
                  ? signal_stream
                  : node.group === 'target'
                  ? node.field === 'User'
                    ? target_user
                    : node.field === 'Host'
                    ? target_host
                    : node.field === 'Action'
                    ? target_action
                    : node.field === 'Process'
                    ? target_process
                    : node.field === 'Hash'
                    ? target_hash
                    : node.field === 'Object'
                    ? target_object
                    : node.field === 'Url'
                    ? target_url
                    : node.field === 'Resource'
                    ? target_resource
                    : null
                  : node.group === 'suspect'
                  ? node.field === 'Host'
                    ? suspect_host
                    : node.field === 'User'
                    ? suspect_user
                    : node.field === 'Action'
                    ? suspect_action
                    : node.field === 'Process'
                    ? suspect_process
                    : node.field === 'Hash'
                    ? suspect_hash
                    : node.field === 'Object'
                    ? suspect_object
                    : node.field === 'Url'
                    ? suspect_url
                    : node.field === 'Resource'
                    ? suspect_resource
                    : null
                  : null
              node.img = img
              ctx.drawImage(img, node.x - size / 2, node.y - size / 2, size + 1, size)
              return ctx
            }}
            maxZoom={10}
            onEngineStop={() => {
              if (!stopEngine) {
                fgRef.current.zoomToFit(500, 100)
                setStopEngine(true)
              }
            }}
            cooldownTicks={100}
            linkColor={['#757575']}
            linkDirectionalParticles={link => (link.current_case ? 4 : 0)}
            linkDirectionalParticleColor={['lightgrey']}
            linkDirectionalParticleWidth={[3]}
            linkDirectionalParticleSpeed={() => 1 * 0.01}
            // linkDirectionalArrowLength={link => (link.current_case ? 2 : 0)}
            // linkDirectionalArrowRelPos={() => 0.9}
            // linkDirectionalArrowColor={() => '#757575'}
          /> */}
      <ForceGraph2D
        ref={fgRef}
        graphData={props.signalData}
        backgroundColor={"#18191d"}
        height={600}
        width={800}
        nodeId="id"
        linkSource="source"
        linkTarget="target"
        autoPauseRedraw={false}
        nodeCanvasObject={(node, ctx) => {
          const size = 15;
          const img = new Image();
          if (node.group !== "signal") {
            const label = node.id;
            const textWidth = ctx.measureText(label).width;
            const bgDimensions = [textWidth, 2].map((n) => n + 10 * 0.2); // some padding
            ctx.fillStyle = "#2d343c"; //background color
            ctx.fillRect(
              node.x - bgDimensions[0] / 2,
              node.y - bgDimensions[1] / 2 + 9.5,
              ...bgDimensions
            );
            ctx.font = `3px mukta`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#d3d3d3"; //node.color;
            ctx.fillText(label, node.x, node.y + 10.1);
          }
          img.src =
            node.group === "compromised"
              ? node.field === "Host"
                ? comp_host
                : node.field === "User"
                ? comp_user
                : node.field === "Action"
                ? comp_action
                : node.field === "Process"
                ? comp_process
                : node.field === "Hash"
                ? comp_hash
                : node.field === "Object"
                ? comp_object
                : node.field === "Url"
                ? comp_url
                : null
              : node.group === "signal"
              ? signal_stream
              : node.group === "target"
              ? node.field === "User"
                ? target_user
                : node.field === "Host"
                ? target_host
                : node.field === "Action"
                ? target_action
                : node.field === "Process"
                ? target_process
                : node.field === "Hash"
                ? target_hash
                : node.field === "Object"
                ? target_object
                : node.field === "Url"
                ? target_url
                : null
              : node.group === "suspect"
              ? node.field === "Host"
                ? suspect_host
                : node.field === "User"
                ? suspect_user
                : node.field === "Action"
                ? suspect_action
                : node.field === "Process"
                ? suspect_process
                : node.field === "Hash"
                ? suspect_hash
                : node.field === "Object"
                ? suspect_object
                : node.field === "Url"
                ? suspect_url
                : null
              : null;

          node.img = img;
          // for highlighting
          const outline = new Image();
          // outline.src = node.current_case === true ? frame : null
          outline.src = frame;
          ctx.drawImage(
            outline,
            node.x - size / 2 + 0.7,
            node.y - size / 2 + 1.5,
            size + 0.5,
            size - 0.5
          ); //frame image

          ctx.drawImage(img, node.x - size / 2, node.y - size / 2, size, size);
          return ctx;
        }}
        // minZoom={1}
        maxZoom={8}
        onEngineStop={() => {
          if (!stopEngine) {
            fgRef.current.zoomToFit(1000, 10);
            setStopEngine(true);
          }
        }}
        cooldownTicks={100}
        linkColor={() => "#757575"}
        // linkDirectionalParticles={4}
        // linkDirectionalParticleWidth={2}
        // linkDirectionalParticleSpeed={(d) => 10 * 0.001}
        // linkDirectionalParticleColor={() => "lightgrey"}
        linkDirectionalParticles={(link) => 5}
        linkDirectionalParticleColor={["lightgrey"]}
        linkDirectionalParticleWidth={(link) => (link.current_case ? 0 : 3)}
        linkDirectionalParticleSpeed={() => 1 * 0.01}
      />
    </div>
  );
}
