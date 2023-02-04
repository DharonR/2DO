//  import { StyleSheet} from "react-native";
// import React from "react";

// export default class Reminder extends React.Component<any, any> {
//   state = {
//     crd: styles.completed,
//     ucrd: styles.reminder,
//     cmpltd: styles.reminder,
//   };
//   render() {
//     return (
//       // <View key={this.props.keyVal} style={styles.reminderStyle}>
//       //   <Text style={this.state.cmpltd}>{this.props.val.title}</Text>
//       //   <Text style={this.state.cmpltd}>{this.props.val.schedule}</Text>

//       //   <TouchableOpacity
//       //     onPress={this.props.deleteReminder}
//       //     style={styles.deleteReminderStyle}
//       //   >
//       //     <Text style={styles.deleteReminderText}> X </Text>
//       //   </TouchableOpacity>
//       //   <TouchableOpacity
//       //     onPress={this.completeReminder.bind(this)}
//       //     style={styles.completeReminderStyle}
//       //   >
//       //     <Text style={styles.completeReminderText}> ✓ </Text>
//       //   </TouchableOpacity>
//       // </View>
//       <div key={this.props.keyVal} style={styles.reminderStyle}>
//         <p style={this.state.cmpltd}>{this.props.val.title}</p>
//         <p style={this.state.cmpltd}>{this.props.val.schedule}</p>

//         <button
//           onClick={this.props.deleteReminder}
//           style={styles.deleteReminderStyle}
//         >
//           <p style={styles.deleteReminderText}> X </p>
//         </button>
//         <button
//           onClick={this.completeReminder.bind(this)}
//           style={styles.completeReminderStyle}
//         >
//           <p style={styles.completeReminderText}> ✓ </p>
//         </button>
//       </div>
//     );
//   }
//   completeReminder() {
//     this.setState({ cmpltd: this.state.crd });
//   }
// }

// const styles = StyleSheet.create({
//   reminderStyle: {
//     position: "relative",
//     padding: 20,
//     paddingRight: 100,
//     borderBottomWidth: 5,
//     borderBottomColor: "#ddd",
//     borderRightWidth: 5,
//     borderRightColor: "#ddd",
//     borderLeftWidth: 5,
//     borderLeftColor: "#ddd",
//   },
//   reminder: {
//     paddingLeft: 20,
//     borderLeftWidth: 10,
//     borderLeftColor: "orange",
//   },
//   completed: {
//     paddingLeft: 20,
//     borderLeftWidth: 10,
//     borderLeftColor: "orange",
//     textDecorationLine: "line-through",
//   },
//   deleteReminderStyle: {
//     position: "absolute",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "red",
//     padding: 0,
//     top: 0,
//     // bottom: 15,
//     left: 0,
//   },
//   completeReminderStyle: {
//     position: "absolute",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "orange",
//     padding: 7,
//     top: 0,
//     bottom: 0,
//     right: 0,
//   },
//   deleteReminderText: {
//     color: "white",
//   },
//   completeReminderText: {
//     color: "white",
//   },
// });

import React from "react";
import "./Reminder.css"

export default class Reminder extends React.Component {
  state = {
    crd: "completed",
    ucrd: "reminder",
    cmpltd: "reminder",
  };
  render() {
    return (
      <div key={this.props.keyVal} className="reminderStyle">
        <p className={this.state.cmpltd}>{this.props.val.title}</p>
        <p className={this.state.cmpltd}>{this.props.val.schedule}</p>
        <button
          onClick={this.props.deleteReminder}
          className="deleteReminderStyle"
        >
          <p className="deleteReminderText"> X </p>
        </button>
        <button
          onClick={this.completeReminder.bind(this)}
          className="completeReminderStyle"
        >
          <p className="completeReminderText"> ✓ </p>
        </button>
      </div>
    );
  }
  completeReminder() {
    this.setState({ cmpltd: this.state.crd });
  }
}