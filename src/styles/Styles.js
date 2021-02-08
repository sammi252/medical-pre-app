import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./Colors";

export default StyleSheet.create({
  safeView: {
    flex: 1,
    padding: 10,
  },

  mainContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },

  rowContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
  },

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
    paddingTop: 12,
    overflow: "hidden",
  },

  explanationContainer: {
    marginTop: 15,
    borderColor: Colors.DARKGRAY,
    borderWidth: 2,
    borderRadius: 4,
    padding: 10
  },

  scrollView: {
    borderRadius: 2,
    borderWidth: 2,
    borderColor: Colors.LIGHT_BORDER,
    padding: 10,
    marginBottom: 10,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },

  modalView: {
    height: 500,
    margin: 10,
    backgroundColor: Colors.SECONDARY_BACKGROUND,
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalHeader: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 12,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "left",
  },

  questionTitleText: {
    color: Colors.TITLE_TEXT,
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 15,
  },

  calculatorTitleText: {
    color: Colors.LIGHT_TEXT,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    paddingTop: 6,
    backgroundColor: Colors.PRIMARY,
    paddingBottom: 6,
  },

  calculatorFooterText: {
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 6,
    paddingBottom: 6,
    color: Colors.LIGHT_TEXT,
    textAlign: "center",
    backgroundColor: Colors.PRIMARY,
    paddingLeft: 10,
  },

  text: {
    color: Colors.DARK_TEXT,
    fontSize: 14,
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 20,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontWeight: "bold",
    overflow: "hidden",
  },

  infoContainer: {
    elevation: 8,
    paddingVertical: 10,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  info: {
    fontSize: 16,
    color: Colors.FONT_PRIMARY,
    overflow: "hidden",
    paddingTop: 5,
  },

  statsBar: {
    color: Colors.PRIMARY,
    backgroundColor: "#453831",
    overflow: "hidden",
  },

  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "right",
  },

  subCategoryText: {
    fontSize: 18,
    color: Colors.DARK_TEXT,
    padding: 10,
  },

  categoryText: {
    textAlign: "left",
    color: Colors.LIGHT_TEXT,
    fontSize: 21,
    padding: 10,
  },

  categoryView: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0091EA",
  },

  button: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: Colors.PRIMARY,
    textAlign: "center",
    color: Colors.LIGHT_TEXT,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 10,
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
  },

  buttonTextFilled: {
    color: Colors.LIGHT_GREY_TEXT,
  },

  buttonTextOutline: {
    color: Colors.PRIMARY,
  },

  buttonContainer: {
    elevation: 8,
  },

  buttonFilled: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.LIGHT_GREY_TEXT,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  buttonOutline: {
    borderColor: Colors.PRIMARY,
    color: Colors.PRIMARY,
    backgroundColor: "transparent",
    borderWidth: 3,
    borderRadius: 5,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 12,
    paddingRight: 12,
  },

  listRow: {
    borderWidth: 1,
    borderColor: Colors.BORDER_PRIMARY,
    borderStyle: "solid",
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: Colors.LIST_ROW_BACKGROUND,
  },

  listRowUnexpanded: {

  },

  listRowExpanded: {
    borderWidth: 1,
    borderColor: Colors.EXPANDED_LIST_BORDER,
    borderStyle: "solid",
    marginBottom: 0,
    marginTop: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: Colors.EXPANDED_LIST_ROW_BACKGROUND,
  },

  listTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.DARKGRAY,
  },

  nestedListContainer: {
    borderWidth: 1,
    borderColor: Colors.EXPANDED_LIST_BORDER,
    borderStyle: "solid",
    borderTopWidth: 0,
    marginBottom: 10,
    backgroundColor: Colors.NESTED_LIST_ROW_BACKGROUND,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  nestedListRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.NESTED_LIST_ROW_BACKGROUND,
    width: "100%",
    height: 54,
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },

  nestedListTitle: {
    color: Colors.PRIMARY,
    fontWeight: "bold",
    fontSize: 14,
  },

  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  childHorizontalRule: {
    height: 1,
    backgroundColor: Colors.LIGHTGRAY,
    width: "100%",
  },

  categoryView: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0091EA",
  },

  categoryText: {
    textAlign: "left",
    color: Colors.LIGHT_TEXT,
    fontSize: 21,
    padding: 10,
  },

  subCategoryText: {
    fontSize: 18,
    color: Colors.DARK_TEXT,
    padding: 10,
  },

  infoActionText: {
    color: Colors.PRIMARY,
    fontWeight: "600",
    borderWidth: 1,
    borderRadius: 2,
    textDecorationStyle: "double"
  },

  seperator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  footerButtonView: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
