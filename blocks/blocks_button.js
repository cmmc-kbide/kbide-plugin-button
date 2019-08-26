Blockly.Blocks["button_block"] = {
    init: function() {
      this.appendDummyInput().appendField("BUTTON");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "BUTTON_PIN");
      this.appendDummyInput()
        .appendField("SET STATE")
        .appendField(new Blockly.FieldVariable("BUTTON_STATE"), "BUTTON_STATE");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };