//ant-design-vue插件
/* module.exports = {
  presets: ['@vue/app',],
   plugins: [
        [
          "import",
          { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css"},

        ]
    ]
} */ 

//element-ui插件
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
