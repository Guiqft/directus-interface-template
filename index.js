import { resolveComponent, openBlock, createBlock } from 'vue';

var script = {
    emits: ["input"],
    props: {
        value: { type: String, required: true, default: null },
    },
    setup: function (props, _a) {
        var emit = _a.emit;
        var handleInput = function (value) {
            emit("input", value);
        };
        return { handleInput: handleInput };
    },
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_input = resolveComponent("v-input");

  return (openBlock(), createBlock(_component_v_input, {
    "model-value": $props.value,
    "onUpdate:modelValue": $setup.handleInput
  }, null, 8 /* PROPS */, ["model-value", "onUpdate:modelValue"]))
}

script.render = render;
script.__file = "src/Input.vue";

var index = {
    id: "custom-input",
    name: "Custom Input",
    description: "Custom input with Vue 3 + Typescript + Sass",
    icon: "box",
    component: script,
    types: ["string"],
};

export default index;
