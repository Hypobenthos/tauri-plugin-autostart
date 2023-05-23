// Copyright 2019-2023 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
async function isEnabled() {
    return await window.__TAURI_INVOKE__("plugin:autostart|is_enabled");
}
async function enable() {
    await window.__TAURI_INVOKE__("plugin:autostart|enable");
}
async function disable() {
    await window.__TAURI_INVOKE__("plugin:autostart|disable");
}

export { disable, enable, isEnabled };
//# sourceMappingURL=index.mjs.map
