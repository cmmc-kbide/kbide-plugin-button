Blockly.JavaScript['button_block'] = function(block) {
  var value_button_pin = Blockly.JavaScript.valueToCode(block, 'BUTTON_PIN', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_button_value = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BUTTON_VALUE'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};