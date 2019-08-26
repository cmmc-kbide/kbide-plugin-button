Blockly.JavaScript["button_block"] = function(block) {
    var text_button_pin = block.getFieldValue("BUTTON_PIN");
    var variable_button_state = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("BUTTON_STATE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	#VARIABLE
	int ${variable_button_state};	
	#END
	 ${variable_button_state} = ${text_button_pin};
    `;
    return code;
  };