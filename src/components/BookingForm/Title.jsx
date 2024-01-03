import React from "react";

const Title = ({ title }) => {
  const styles = StyleSheet.create({
    titleContainer: {
      marginTop: 24,
    },
    reportTitle: {
      color: "#3778C2",
      letterSpacing: 4,
      fontSize: 25,
      textAlign: "right",
      textTransform: "uppercase",
    },
  });
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>{title}</Text>
    </View>
  );
};

export default Title;
