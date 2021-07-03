<template>
    <v-input :model-value="value" @update:model-value="handleInput" />
</template>

<script lang="ts">
export default {
    emits: ["input"],
    props: {
        value: { type: String, required: true, default: null },
    },
    setup(props, { emit }) {
        const handleInput = (value: string) => {
            emit("input", value)
        }

        return { handleInput }
    },
}
</script>

<style lang="scss" scoped></style>
