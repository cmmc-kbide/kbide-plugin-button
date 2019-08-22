Blockly.Blocks['button_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BUTTON");
    this.appendValueInput("BUTTON_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.appendDummyInput()
        .appendField("SET TO")
        .appendField(new Blockly.FieldVariable("BUTTON_VALUE"), "BUTTON_VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};