import "./styles.css";
import Graph from "./graph";

export default function App() {
  const data = {
    nodes: [
      {
        "CNAMTime": 1622687998410,
        "DetectionConfidence": "Low",
        "DetectionName": "Detect Outbound SMB Traffic",
        "DetectionScore": 5,
        "DetectionSeverity": null,
        "DetectionTactic": "Command and Control",
        "DetectionTechnique": "Protocol Tunneling",
        "Occurrences": 71,
        "current_case": false,
        "group": "signal",
        "id": "b54a4b5f747643388251c6d6baaf4d00"
      },
      {
        "CNAMTime": 1622807844216,
        "DetectionConfidence": "Low",
        "DetectionName": "Detect Outbound SMB Traffic",
        "DetectionScore": 5,
        "DetectionSeverity": null,
        "DetectionTactic": "Command and Control",
        "DetectionTechnique": "Protocol Tunneling",
        "Occurrences": 80,
        "current_case": false,
        "group": "signal",
        "id": "54a23f66654d4ac087c3eb5f590f4349"
      },
      {
        "CNAMTime": 1623232627712,
        "DetectionConfidence": "Low",
        "DetectionName": "Detect Outbound SMB Traffic",
        "DetectionScore": 5,
        "DetectionSeverity": null,
        "DetectionTactic": "Command and Control",
        "DetectionTechnique": "Protocol Tunneling",
        "Occurrences": 15,
        "current_case": false,
        "group": "signal",
        "id": "df8bc526370e494ca758b76acb9113b1"
      },
      {
        "CNAMTime": 1623205055140,
        "DetectionConfidence": "Low",
        "DetectionName": "Detect Outbound SMB Traffic",
        "DetectionScore": 5,
        "DetectionSeverity": null,
        "DetectionTactic": "Command and Control",
        "DetectionTechnique": "Protocol Tunneling",
        "Occurrences": 130,
        "current_case": false,
        "group": "signal",
        "id": "13bf620c9090444b920a32cc7ce2400b"
      },
      {
        "CNAMTime": 1623352637362,
        "DetectionConfidence": "Low",
        "DetectionName": "Detect Outbound SMB Traffic",
        "DetectionScore": 5,
        "DetectionSeverity": "Medium",
        "DetectionTactic": "Command and Control",
        "DetectionTechnique": "Protocol Tunneling",
        "Occurrences": 109,
        "current_case": false,
        "group": "signal",
        "id": "af706d798e084315934a9eb6f3729b9c"
      },
      {
        "CNAMTime": 1623414598804,
        "DetectionConfidence": "Low",
        "DetectionName": "Detect Outbound SMB Traffic",
        "DetectionScore": 5,
        "DetectionSeverity": "Medium",
        "DetectionTactic": "Command and Control",
        "DetectionTechnique": "Protocol Tunneling",
        "Occurrences": 54,
        "current_case": false,
        "group": "signal",
        "id": "59afcb40635140f59497df6be43fbab0"
      },
      {
        "CNAMTime": 1623578951136,
        "DetectionConfidence": "Low",
        "DetectionName": "Detect Outbound SMB Traffic",
        "DetectionScore": 5,
        "DetectionSeverity": "Medium",
        "DetectionTactic": "Command and Control",
        "DetectionTechnique": "Protocol Tunneling",
        "Occurrences": 142,
        "current_case": false,
        "group": "signal",
        "id": "8b6c812e2c4c4a97afdeeff9e32ad661"
      },
      {
        "CNAMTime": 1623694639139,
        "DetectionConfidence": "Low",
        "DetectionName": "Detect Outbound SMB Traffic",
        "DetectionScore": 5,
        "DetectionSeverity": "Medium",
        "DetectionTactic": "Command and Control",
        "DetectionTechnique": "Protocol Tunneling",
        "Occurrences": 105,
        "current_case": false,
        "group": "signal",
        "id": "775f5a98dd3849f2b4b25b58bf2a3125"
      },
      {
        "CNAMTime": 1623841762340,
        "DetectionConfidence": "Low",
        "DetectionName": "Detect Outbound SMB Traffic",
        "DetectionScore": 5,
        "DetectionSeverity": "Medium",
        "DetectionTactic": "Command and Control",
        "DetectionTechnique": "Protocol Tunneling",
        "Occurrences": 117,
        "current_case": true,
        "group": "signal",
        "id": "13fa9b6f11c6434dbba501a31d4c818b"
      },
      {
        "current_case": true,
        "entity_id": "3508fc6564e343ff8a879d2181dd47d3",
        "field": "Host",
        "group": "suspect",
        "id": "61.38.162.66"
      }
    ],
    links: [
      {
        "cnam_time": 1622617602414,
        "graph_id": "21f1c2d987c24fa1a866d09f307557e9",
        "relation": "suspecthost",
        "scope_id": "default",
        "source": "61.38.162.66",
        "target": "b54a4b5f747643388251c6d6baaf4d00"
      },
      {
        "cnam_time": 1622700176481,
        "graph_id": "21f1c2d987c24fa1a866d09f307557e9",
        "relation": "suspecthost",
        "scope_id": "default",
        "source": "61.38.162.66",
        "target": "54a23f66654d4ac087c3eb5f590f4349"
      },
      {
        "cnam_time": 1623130690237,
        "graph_id": "21f1c2d987c24fa1a866d09f307557e9",
        "relation": "suspecthost",
        "scope_id": "default",
        "source": "61.38.162.66",
        "target": "13bf620c9090444b920a32cc7ce2400b"
      },
      {
        "cnam_time": 1623222386190,
        "graph_id": "21f1c2d987c24fa1a866d09f307557e9",
        "relation": "suspecthost",
        "scope_id": "default",
        "source": "61.38.162.66",
        "target": "df8bc526370e494ca758b76acb9113b1"
      },
      {
        "cnam_time": 1623236793148,
        "graph_id": "21f1c2d987c24fa1a866d09f307557e9",
        "relation": "suspecthost",
        "scope_id": "default",
        "source": "61.38.162.66",
        "target": "af706d798e084315934a9eb6f3729b9c"
      },
      {
        "cnam_time": 1623364113354,
        "graph_id": "21f1c2d987c24fa1a866d09f307557e9",
        "relation": "suspecthost",
        "scope_id": "default",
        "source": "61.38.162.66",
        "target": "59afcb40635140f59497df6be43fbab0"
      },
      {
        "cnam_time": 1623427048989,
        "graph_id": "21f1c2d987c24fa1a866d09f307557e9",
        "relation": "suspecthost",
        "scope_id": "default",
        "source": "61.38.162.66",
        "target": "8b6c812e2c4c4a97afdeeff9e32ad661"
      },
      {
        "cnam_time": 1623590733393,
        "graph_id": "21f1c2d987c24fa1a866d09f307557e9",
        "relation": "suspecthost",
        "scope_id": "default",
        "source": "61.38.162.66",
        "target": "775f5a98dd3849f2b4b25b58bf2a3125"
      },
      {
        "cnam_time": 1623710073576,
        "graph_id": "21f1c2d987c24fa1a866d09f307557e9",
        "relation": "suspecthost",
        "scope_id": "default",
        "source": "61.38.162.66",
        "target": "13fa9b6f11c6434dbba501a31d4c818b"
      }
    ]
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Graph signalData={data} />
    </div>
  );
}
