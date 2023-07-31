<a name="v0.80.1"></a>
## v0.80.1 (2023-07-31)


#### Features

*   bump typescript to v5 ([9fd5cf53](https://github.com/plouc/nivo/commit/9fd5cf53d11f8f96ad5e89e4c1605c02f34fc678))



<a name="v0.83.0"></a>
## v0.83.0 (2023-07-31)


#### Features

* **core:**
  *  move @nivo/core as a regular dependency in all dependent packages ([74cefdac](https://github.com/plouc/nivo/commit/74cefdaccc2b2a9d1e0927c9a10f627c8cb92d26))
  *  remove unused HOCs ([d60d87b2](https://github.com/plouc/nivo/commit/d60d87b2b9feead032785f89f79e9fcdfe3d5e2b))
* **grid:**
  *  mark data as readonly ([cc436a03](https://github.com/plouc/nivo/commit/cc436a0345219a5d74e11a6d7559c922794a548b))
  *  adjust the version to match the latest version of other packages ([b427323e](https://github.com/plouc/nivo/commit/b427323e2d940ed79feb8f7b9b293c922c92299e))
  *  mark the package as side-effects free ([7fcb9baa](https://github.com/plouc/nivo/commit/7fcb9baa8e98e89a09ae3a14371451aa7cb67510))
  *  introduce @nivo/grid package ([0f5229f4](https://github.com/plouc/nivo/commit/0f5229f46dbe026d9483f0c6b22dfb6e96bd12dd))
* **infrastructure:**  remove bump-peer-deps script ([0aeb88c8](https://github.com/plouc/nivo/commit/0aeb88c8cebbe6918e88f9647b2d9b2991b6d338))
* **jest:**  upgrade jest and enable workerThreads to speedup tests ([0517d660](https://github.com/plouc/nivo/commit/0517d66096c80c5b420749b1fa69e468efaa5aa1))
* **motion:**  remove all references to react-motion ([640de038](https://github.com/plouc/nivo/commit/640de0381385b59deaaa18110be7acfe0660de60))
* **storybook:**  improve globl styles ([15472868](https://github.com/plouc/nivo/commit/154728681c54a736efccdcadbb0081ebb4d9d637))
* **waffle:**
  *  restore support for patterns & gradients for the SVG implementation ([c9298f8f](https://github.com/plouc/nivo/commit/c9298f8f86d01ceff703f35771c74aa7cb3a4a35))
  *  update the doc to indicate that the canvas implementation does not support custom layers ([edc92cf6](https://github.com/plouc/nivo/commit/edc92cf6147e738c94328c68e8943eeb045ba212))
  *  canvas implementation now support cell opacity ([e2f57a7a](https://github.com/plouc/nivo/commit/e2f57a7a4684b9357aacf0709c41e03d2ea56e4e))
  *  canvas implementation now support borderWidth and introduce @nivo/canvas ([c6dcf330](https://github.com/plouc/nivo/commit/c6dcf3302ad690eef843d80f1f529f2affa1ce4a))
  *  fix borderColor to work for empty and non-empty cells ([650da455](https://github.com/plouc/nivo/commit/650da455279fae635434998a4001062101423942))
  *  add aria attributes doc to the website ([be42aa53](https://github.com/plouc/nivo/commit/be42aa5301d4c5e765ae5c0ebede2d31e47c4fd9))
  *  add support for borderRadius ([e1c18c46](https://github.com/plouc/nivo/commit/e1c18c4641f0597450c32ee2305bf96243e2261f))
  *  adjust snapshots due to the addition of opacity ([549b8abd](https://github.com/plouc/nivo/commit/549b8abdf1e75d04c999f5b5c12134f0e5737406))
  *  move the management of cells transitions to a hook ([593a1596](https://github.com/plouc/nivo/commit/593a1596cb3570accf4f6335b18429205d05dbc2))
  *  restore support for emptyOpacity ([cdee20a8](https://github.com/plouc/nivo/commit/cdee20a87872b7dd3b9ee0fcb215c59e72f07eb2))
  *  areas should be hidden as well ([571724db](https://github.com/plouc/nivo/commit/571724dbee00bc8afed979b1e19b50b3ef5d867f))
  *  add missing computedData to the custom layer context ([c436391b](https://github.com/plouc/nivo/commit/c436391b9b8dc1f8f6bef9c1d68282d7bc495c15))
  *  restore the behavior of hiddenIds so that legends are preserved ([b7b24e0a](https://github.com/plouc/nivo/commit/b7b24e0a87c9218dd5415f0e861cb34decc264bd))
  *  use a centralized data generator for the website and storybook ([18eca5e3](https://github.com/plouc/nivo/commit/18eca5e3161992dac79b2f8c77ef0b8248540892))
  *  use the default fillDirectioon in the website for all flavors ([ec3ab1b2](https://github.com/plouc/nivo/commit/ec3ab1b218250fcd6653246a5bea4815a53c7ab6))
  *  implement proper types for both SVG and canvas custom layers ([6f5f0cca](https://github.com/plouc/nivo/commit/6f5f0cca3321cd8a8aedf69ecf4dc1478e5db87b))
  *  fix snapshots due to the change for the default of fillDirection ([7ce44a7d](https://github.com/plouc/nivo/commit/7ce44a7de3ca1c1aaf99be37c2d1b902fda3d6c3))
  *  fix linting errors ([35bf3d29](https://github.com/plouc/nivo/commit/35bf3d290924637d0433325307d35689e1034ba1))
  *  mark the package as side-effects free ([9005653b](https://github.com/plouc/nivo/commit/9005653b4f077c45217f2b18bc18e6deee9d9879))
  *  get rid of lodash ([121207e7](https://github.com/plouc/nivo/commit/121207e78d6a0ff3b914597ea23dd9a4779f6b1a))
  *  use @nivo/grid for most computations and restore padding support ([1b6652e2](https://github.com/plouc/nivo/commit/1b6652e265b65141e7db8a866c0a1e12d5bb3a13))
  *  add story links for WaffleHtml and WaffleCanvas ([4b8f4af8](https://github.com/plouc/nivo/commit/4b8f4af86bfe7071cd4306f56e48c3ff0b6075d9))
  *  legend items order reacts to fillDirection ([e4f7a2f5](https://github.com/plouc/nivo/commit/e4f7a2f5de126b8ffb88121793c05fb8f550f51f))
  *  cleanup stories ([af38d8a2](https://github.com/plouc/nivo/commit/af38d8a2f3104af9ec96cde53db70765455a91a5))
  *  restore legends for WaffleCanvas ([cdb6873b](https://github.com/plouc/nivo/commit/cdb6873b62e427858803624dd8dc4f7eb7291e7d))
  *  fix the story showcasing a custom cell component ([951da890](https://github.com/plouc/nivo/commit/951da89088d3ea1da78d74a1f9bba6579613e97a))
  *  restore the test for Waffle legends support ([fea82841](https://github.com/plouc/nivo/commit/fea828419c8fa6a0baa26385a8b674072c078a3d))
  *  add an ent-to-end test for the tooltip ([3968c850](https://github.com/plouc/nivo/commit/3968c8506bdfb3e5a5b3eb0237d946df52af604e))
  *  adjust the documentation according to the updated API ([f15baa0f](https://github.com/plouc/nivo/commit/f15baa0f161c349b714776638532a3788437c479))
  *  forward legend data ([d6b04620](https://github.com/plouc/nivo/commit/d6b04620f19f33f47df165392776ba8c3ea4c940))
  *  update tests ([d3847c0b](https://github.com/plouc/nivo/commit/d3847c0bfadc51008fb64dd793abf54850146069))
  *  remove DefaultRawDatum as Datum can be used as a default ([07fc16a1](https://github.com/plouc/nivo/commit/07fc16a14fca7833cef388928c951e7a602b2d47))
  *  remove react-motion from deps ([ef984d09](https://github.com/plouc/nivo/commit/ef984d0908cf878da9ff0eb7f3c79f16afd514ef))
  *  get all flavors to work and types to be generated without errors ([564acd1c](https://github.com/plouc/nivo/commit/564acd1c03a6d8038bba737442ff7e633d7c63cb))
  *  migrate to TypeScript, remove react-motion ([6a861f1d](https://github.com/plouc/nivo/commit/6a861f1d687326036a94a3232529402e3164e04e))

#### Bug Fixes

* **waffle:**  fix the waffle pages in the website ([14d11cd4](https://github.com/plouc/nivo/commit/14d11cd4cf4ae59053b9d9616f46d01ec701aeac))
* **website:**  disable gatsby handling of eslint ([db12b0cd](https://github.com/plouc/nivo/commit/db12b0cdcf0eb4437fea25b36a61153a91859a26))



<a name="v0.82.1"></a>
## v0.82.1 (2023-07-31)


#### Features

* **infrastructure:**  restore the fix to bump peer dependencies ([b2876512](https://github.com/plouc/nivo/commit/b2876512d000449ba5412817df0747d985d6d8f3))



<a name="v0.82.0"></a>
## v0.82.0 (2023-07-31)


#### Bug Fixes

*   Relax constraints on `@react-spring/web` (#2280) ([6d946600](https://github.com/plouc/nivo/commit/6d946600e69f2ce32622fb731eb5f11bcf813cb4))
* **axes:**  fix typings ([478cfd39](https://github.com/plouc/nivo/commit/478cfd39cf454fc7429f82c36885c1d8efd52788))
* **boxplot:**  fix stale dependencies ([2b56be78](https://github.com/plouc/nivo/commit/2b56be785d6adc9d768cf608d23a599d71bf66d8))
* **bump:**  add missing types for event handlers ([2889eb27](https://github.com/plouc/nivo/commit/2889eb2707d59ab2d8251fbed193db71f185d7ea))
* **canvas:**  fix getRelativeCursor for non SVG implementations ([4ccb8dfd](https://github.com/plouc/nivo/commit/4ccb8dfdd8cbe56ce97555b5989cf6eb83d47b52))
* **ci:**  rename make targets in the github workflow ([4af797a8](https://github.com/plouc/nivo/commit/4af797a8c20b2c2149e207dd14f2df1430fd1452))
* **deps:**  add missing dependencies in nivo packages ([2339e382](https://github.com/plouc/nivo/commit/2339e38290163838c2406b0d10878a71d745ee78))
* **jest:**  update jest config for d3-color ([62ded370](https://github.com/plouc/nivo/commit/62ded370164da1c96552df32d4defac07dfe6a31))
* **marimekko:**  add missing types for event handlers ([ef9fa75a](https://github.com/plouc/nivo/commit/ef9fa75ab615e49b60b593102a70335b4c94153b))
* **network:**  fix typings errors ([576e1c28](https://github.com/plouc/nivo/commit/576e1c281224e386acbbea8bf1bfe95933184b06))
* **pie:**  fix types ([506ba016](https://github.com/plouc/nivo/commit/506ba016dc57ed89bc3d5d2f2bb6dec59275fae2))
* **pkgs:**
  *  all packages should now build without errors ([d3abfa63](https://github.com/plouc/nivo/commit/d3abfa634ec11caa31826d5d431ff1238360a22b))
  *  restore types for @nivo/static and @nivo/express ([8f7beb48](https://github.com/plouc/nivo/commit/8f7beb48d55ec9b738e0fb60b4e236dd74c61bff))
* **radar:**
  *  add missing types for event handlers ([afcccfa3](https://github.com/plouc/nivo/commit/afcccfa365d34e0930f1e1a5cbd07e51b563a238))
  *  add missing dependencies ([f857e614](https://github.com/plouc/nivo/commit/f857e6141f8b01b2611799b9a12068e4ff925794))
* **radial-bar:**  add missing dependencies ([9ead4b57](https://github.com/plouc/nivo/commit/9ead4b57714d9925f86fa42228bb46e67683dbea))
* **react:**  adjust react deps ([7ee20834](https://github.com/plouc/nivo/commit/7ee20834b981519d76c9c886a9a5f5cfcb18e9b4))
* **recompose:**  add missing dependencies ([1531f6ff](https://github.com/plouc/nivo/commit/1531f6ff59a42a0ea812b125b139b84c445fe4a5))
* **sankey:**
  *  add missing types for event handlers ([20ba8bca](https://github.com/plouc/nivo/commit/20ba8bca26d9ad3c12b328010199215b80a1b772))
  *  add missing dependencies ([67c77f16](https://github.com/plouc/nivo/commit/67c77f16a3c3ef483196e06430d20c59278c8811))
* **scales:**
  *  improve constraints for scales ([96862f96](https://github.com/plouc/nivo/commit/96862f964eaa1669d162a6c81982a4ee4ccecbbc))
  *  fix types ([62856324](https://github.com/plouc/nivo/commit/62856324edea6d78fad4e9f921337318c8cad44c))
* **scatterplot:**
  *  add missing types for event handlers ([5ebadd45](https://github.com/plouc/nivo/commit/5ebadd45cbd7593214ff964d9845b95560a6cf0f))
  *  fix dependencies ([7840b55f](https://github.com/plouc/nivo/commit/7840b55fbab7503537288e16ba22e98ac6999ceb))
* **static:**  add missing @nivo/colors dependency ([59490889](https://github.com/plouc/nivo/commit/59490889a1ae964f617d11b130a138429318bd9f))
* **storybook:**  add missing @nivo/axes dependency ([a17ce851](https://github.com/plouc/nivo/commit/a17ce851efb75e8be0df0c204d3793c8f435fab8))
* **stream:**
  *  add missing types for event handlers ([609fba8c](https://github.com/plouc/nivo/commit/609fba8c69073cdeb75c44aa237ca98c464b3068))
  *  fix dependencies ([b6ffc507](https://github.com/plouc/nivo/commit/b6ffc5070adad31cfb76055a587c36c71315c9a2))
* **sunburst:**  fix dependencies ([8ba23f76](https://github.com/plouc/nivo/commit/8ba23f76cca9cbf3ab71a97766a3edcdf7482d37))
* **swarmplot:**  fix dependencies ([e7346642](https://github.com/plouc/nivo/commit/e7346642bfbe1c4248a2611822eb00bc81765728))
* **tests:**  adjust transformIgnorePatterns for pnpm ([61f8fe8d](https://github.com/plouc/nivo/commit/61f8fe8d34ba4e2cbb77dde81c052e37acfc819c))
* **treemap:**  fix dependencies ([9287df72](https://github.com/plouc/nivo/commit/9287df727ff23a98766e3d33f945eaf453ae11c0))
* **ts:**  add missing types for mouse events in various packages ([388a434d](https://github.com/plouc/nivo/commit/388a434dce3b5c455bc132df652fba3707dc4375))
* **types:**  ignore nivo packages due to the migration to pnpm ([727e2a85](https://github.com/plouc/nivo/commit/727e2a858fb5934e2d55766e230ea6bae062bf13))
* **voronoi:**
  *  add missing types for event handlers ([716f9c79](https://github.com/plouc/nivo/commit/716f9c7983af07c15da580516ae511237e3ff66f))
  *  fix dependencies ([c9a783f1](https://github.com/plouc/nivo/commit/c9a783f1348cdef7328f50d795d44ae7f8a8b9c4))
* **waffle:**  fix dependencies ([9d6a7615](https://github.com/plouc/nivo/commit/9d6a76153fc8274b7e41ed068aeab7c4a93cb39c))
* **website:**
  *  attempt to fix gatsby build on CI ([0828cd75](https://github.com/plouc/nivo/commit/0828cd75701e77f4f141057cc84668eb714deefd))
  *  fix website build ([d1b8b905](https://github.com/plouc/nivo/commit/d1b8b905d6a954597b0a7b6a1a9439d4ddff6e18))
  *  get the website to work with pnpm and react 18 (behaving as react 17) ([c28ff41a](https://github.com/plouc/nivo/commit/c28ff41a94d83df91336191473e5177551bc76d9))
  *  minor docs fix for specifying color (#2139) ([3e639a28](https://github.com/plouc/nivo/commit/3e639a28bc969ded57ad881a776ad973645ecdbf))
  *  remove orient prop from axisBottom and axisLeft ([e1d8555d](https://github.com/plouc/nivo/commit/e1d8555d3a19f47310ee8333284751b72479e3ca))

#### Features

* **axes:**  update tests for @nivo/axes ([49170b0c](https://github.com/plouc/nivo/commit/49170b0c90e3d739908d079ee4a4a553913eaebc))
* **boxplot:**
  *  add the package to the website dependencies ([68860da3](https://github.com/plouc/nivo/commit/68860da3f36742cef0f56705be029a28d7849d0b))
  *  remove bg from boxplot icons ([0b07b06e](https://github.com/plouc/nivo/commit/0b07b06eb2be7298226c8198988dcacf5877f843))
  *  fix stale deps and add BoxPlot to the website ([e785bfbc](https://github.com/plouc/nivo/commit/e785bfbcf7cd7b6df0685a293c2d6e8de6584f02))
* **calendar:**  move stories to the dedicated storybook workspace ([1465a4ce](https://github.com/plouc/nivo/commit/1465a4cee5f3abd64dabe80462ba6d17fe22de6a))
* **capture:**
  *  update the capture script to always use the HEADLESS constant ([4561de83](https://github.com/plouc/nivo/commit/4561de83fb15c8bf956042af6728a67a875107d2))
  *  update the capture script ([66f4b42a](https://github.com/plouc/nivo/commit/66f4b42a28d8581e0de6e26555ca1fb0befe1c63))
* **captures:**  adjust the capture scripts due to the pupeeter update ([884a7012](https://github.com/plouc/nivo/commit/884a7012ac1697913e5d0132d58510ec743e7ed8))
* **chord:**  move stories to the dedicated storybook workspace ([13c1f5cb](https://github.com/plouc/nivo/commit/13c1f5cb939be05d015211f40e8ec522644a5003))
* **ci:**
  *  cache pnpm deps ([f17b4f81](https://github.com/plouc/nivo/commit/f17b4f810aef318c1b644cb1339324d262832f60))
  *  use node 18 on CI ([4c78bb95](https://github.com/plouc/nivo/commit/4c78bb9562e2919d032089ceb322d241f96e19e5))
  *  update github worflow to use pnpm ([f2ade2b4](https://github.com/plouc/nivo/commit/f2ade2b4dbff73c921b2cd50dce3d83b360234aa))
* **circle-packing:**  move stories to the dedicated storybook workspace ([7e900f58](https://github.com/plouc/nivo/commit/7e900f58ac1fc8ea88e92066ac7a3662b7be5e3c))
* **collective:**  add open collective info ([ee8466de](https://github.com/plouc/nivo/commit/ee8466de2be0c0ec1ad929d87fc4350487ab8057))
* **core:**  directly export types ([0053121e](https://github.com/plouc/nivo/commit/0053121e11bd8061c627f02c7f8e8894449132d8))
* **deploy:**  add a build script for vercel ([e8397fac](https://github.com/plouc/nivo/commit/e8397fac61edd407a359c15fada67ae86ae418db))
* **e2e:**
  *  test failed on CI as expected, removing the faulty assertion ([c7bd884e](https://github.com/plouc/nivo/commit/c7bd884ecf966d7fd37381afd95d64f5fcff35a5))
  *  check failing test ([316e6b18](https://github.com/plouc/nivo/commit/316e6b18a3c586d73d8012e6e183edf8f4161d1a))
  *  add another test for BarCanvas ([d201a487](https://github.com/plouc/nivo/commit/d201a4875112d6aac664a336ef0abae312d09cc0))
  *  do not record videos ([e20ec949](https://github.com/plouc/nivo/commit/e20ec949bed52eaba89a1af2f42e1a03d5664025))
  *  trying to use cypress on CI ([7c8607fa](https://github.com/plouc/nivo/commit/7c8607fa63ba44cf2010c1a8bafc9f2d4cac10e0))
  *  cypress on CI without custom action ([b080484d](https://github.com/plouc/nivo/commit/b080484dc136b922d0c70826775880b822ec1295))
  *  dissociate build and test on CI ([6a4b6fd8](https://github.com/plouc/nivo/commit/6a4b6fd8050defb20f240eea9b19227a189b2afe))
  *  customize cypress command ([4822fba3](https://github.com/plouc/nivo/commit/4822fba399ced407259904ed2675a5069b9c5c53))
  *  disable cypress install management on CI ([58f60c5c](https://github.com/plouc/nivo/commit/58f60c5c4c91fd856983108dd0840bc10b5e86a7))
  *  remove working directory config for CI as it breaks ([f29fb870](https://github.com/plouc/nivo/commit/f29fb8708c94734112b61d3a18f0e346f4233ae8))
  *  specify the working directory on CI ([9ac6c4d7](https://github.com/plouc/nivo/commit/9ac6c4d7b0c21ed0610ac6b88544c1ab43810bdf))
  *  enable component testing on CI ([9e894f90](https://github.com/plouc/nivo/commit/9e894f9073491d0278858db23b6b9163689c6029))
  *  add a fake pnpm lock file on CI so that cypress actions detect pnpm ([9017097e](https://github.com/plouc/nivo/commit/9017097e6d90b4da277ffd851d6983f28401cfc9))
  *  specify the command prefix for cypress action to use pnpm ([0a0691f0](https://github.com/plouc/nivo/commit/0a0691f03337fc57952804b468a16579a7168460))
  *  integrate e2e tests to CI ([42fa3b9f](https://github.com/plouc/nivo/commit/42fa3b9ff849b05b2bca63f358ebeaef6ec680dd))
  *  add support for end-to-end testing via cypress ([eb3af8bf](https://github.com/plouc/nivo/commit/eb3af8bfa65d5c13128444da191bb86b3ccfaa39))
* **fmt:**  reformat the code after the prettier upgrade ([d5b171c0](https://github.com/plouc/nivo/commit/d5b171c0e3f483130baaabe88089090d2b194548))
* **funnel:**  move stories to the dedicated storybook workspace ([9424a46c](https://github.com/plouc/nivo/commit/9424a46cc7a66fd42cc4f8a617f2f7981e50dd23))
* **heatmap:**  move stories to the dedicated storybook workspace ([71f11276](https://github.com/plouc/nivo/commit/71f11276ad158fb8a8e6ab4f5d231f5359ead74f))
* **infrastructure:**
  *  restore make:init script as it's used by codesandbox ([6850f63c](https://github.com/plouc/nivo/commit/6850f63c9763194fd5ebc1c8ef210e3c0b867374))
  *  remove prepublish scripts ([9999e904](https://github.com/plouc/nivo/commit/9999e9049ee8d475d663fc5ff5d9a8f20c4085a1))
  *  upgrade lerna ([275f1222](https://github.com/plouc/nivo/commit/275f12228676e2a4a668225d3c186efd39e41d40))
  *  silence is golden :) ([44143786](https://github.com/plouc/nivo/commit/4414378613fb5ea2ae7a42aeecab48b22f106b61))
  *  try to speedup the builds by omitting types generation when building all packages ([6ad69221](https://github.com/plouc/nivo/commit/6ad6922184af14301b5649702c2ff4b39db5b437))
  *  make sure that we can build both the website and storybook on CI ([dc997927](https://github.com/plouc/nivo/commit/dc9979270a12a9e8f1106e71a2b00405c8390949))
  *  pkgs-build target now fails as soon as it encounters an error ([eaa7c623](https://github.com/plouc/nivo/commit/eaa7c623136e2613c43605a82e34fc006a942caa))
  *  rename package targets to pkg ([b1bfd2bd](https://github.com/plouc/nivo/commit/b1bfd2bdad77d89a23a597a5fc24ef7f0cceb063))
  *  upgrade rollup ([df65553b](https://github.com/plouc/nivo/commit/df65553b8ad212276e3f5ff0c41f9adac4ec3f4c))
  *  replace yarn calls with pnpm ([e774250c](https://github.com/plouc/nivo/commit/e774250c647fb4d0a84cfc4fe1e671346abe0644))
  *  migrate to pnpm ([e0805029](https://github.com/plouc/nivo/commit/e08050296491313b08b79f27ffdf7f65cbbfe0d2))
* **line:**  move stories to the dedicated storybook workspace ([f11141cb](https://github.com/plouc/nivo/commit/f11141cb0c88d4bae0b1eda6b176b8ac92493452))
* **marimekko:**  move stories to the dedicated storybook workspace ([83eee32b](https://github.com/plouc/nivo/commit/83eee32be959e716e4ee2abac2ba29f538168259))
* **network:**  move stories to the dedicated storybook workspace ([8c149507](https://github.com/plouc/nivo/commit/8c149507151311904a15ca0aae81ce357c01bdfb))
* **pie:**  move stories to the dedicated storybook workspace ([8b55aeac](https://github.com/plouc/nivo/commit/8b55aeacac7bc81d80041874397cdfb09a28eee8))
* **radar:**  move stories to the dedicated storybook workspace ([8f1506ff](https://github.com/plouc/nivo/commit/8f1506ffa03a69a9a09ff7f5521307f7f5b713e0))
* **radial-bar:**  move stories to the dedicated storybook workspace ([3ef27cb0](https://github.com/plouc/nivo/commit/3ef27cb049fa7a81c4820a209264c891224df469))
* **react:**  force usage of react 18 ([3b4e0f80](https://github.com/plouc/nivo/commit/3b4e0f803b748835d197b0c66d1546afad0d57f2))
* **sankey:**  move stories to the dedicated storybook workspace ([d5b35490](https://github.com/plouc/nivo/commit/d5b354903414dad02467016853207bf12249772c))
* **scatterplot:**  move stories to the dedicated storybook workspace ([f8998fef](https://github.com/plouc/nivo/commit/f8998fef8dc466509e48fd0c49c1dff4eb94f431))
* **stories:**  isolate storybook ([71e7ba12](https://github.com/plouc/nivo/commit/71e7ba1254ffca4a5f9658e18f1b0bb0eeee7b9b))
* **stream:**  move stories to the dedicated storybook workspace ([801d5881](https://github.com/plouc/nivo/commit/801d58813edc64790e58b35e42c6da21334f148e))
* **sunburst:**  move stories to the dedicated storybook workspace ([b9fea1d2](https://github.com/plouc/nivo/commit/b9fea1d225fd4261f9c13f2990784bc697cde1c0))
* **swarmplot:**  move stories to the dedicated storybook workspace ([0e29a4c6](https://github.com/plouc/nivo/commit/0e29a4c605358ed90e441d92246fb48de382ceb7))
* **test:**  update tests for bar ([db04e12c](https://github.com/plouc/nivo/commit/db04e12c988d8d0c7bbf92464acc02329f7976d0))
* **treemap:**  move stories to the dedicated storybook workspace ([4763aa43](https://github.com/plouc/nivo/commit/4763aa4391d6b352a50dd41742b5505b81a3f2d6))
* **types:**  uprgade typescript to 4.9.5 ([cc0cf510](https://github.com/plouc/nivo/commit/cc0cf5105f65adcddc706b263c1488fffbe4d2f7))
* **typings:**  specify TypeScript baseUrl for all nivo packages ([bb9a119b](https://github.com/plouc/nivo/commit/bb9a119bd35f5ff608511e6b0a9db3777a7b918f))
* **voronoi:**  move stories to the dedicated storybook workspace ([f65fd491](https://github.com/plouc/nivo/commit/f65fd4913fd5d336755cba5c5c4ae67b2395e69a))
* **waffle:**  move stories to the dedicated storybook workspace ([f41a2873](https://github.com/plouc/nivo/commit/f41a287345ede15b05a8bf2ef8d613be85184891))
* **website:**
  *  add missing BoxPlot properties documentation ([c41dd62c](https://github.com/plouc/nivo/commit/c41dd62c5db8eea94aace4107078ab18bd5e8dd2))
  *  fix mixed bar/boxplot meta ([0f83d589](https://github.com/plouc/nivo/commit/0f83d5891d94d6759363d01941c583f86e5b3103))
  *  upgrade gatsby ([c9b6ab6e](https://github.com/plouc/nivo/commit/c9b6ab6efde0c9a8c74732acdc6a38e43b17eecb))



<a name="v0.80.0"></a>
## v0.80.0 (2023-07-31)


#### Features

* **canvas:**  add custom ref to ScatterPlotCanvas and NetworkCanvas (#1953) ([b0210744](https://github.com/plouc/nivo/commit/b02107448a178af092e1e254e10e10f988a692ef))
* **choropleth:**  add support for defs and fill to the choropleth (#2072) ([e18733e7](https://github.com/plouc/nivo/commit/e18733e78450c38c8e659dca65e8b626396410ca))
* **deps:**  upgrade package constraints to include React 18 (#2056) ([9df8a0ae](https://github.com/plouc/nivo/commit/9df8a0ae07a85d8491c4b05950669e41230c1257))
* **radar:**  add support for global rotation to the radar chart (#1985) ([d57345a7](https://github.com/plouc/nivo/commit/d57345a7014895c2f714ded9e473699972091197))
* **radial-bar:**  implement defs/fill, modeled after Bar implementation (#1957) ([c40006f5](https://github.com/plouc/nivo/commit/c40006f5a3e09a4fc511d7fdefd1fa1bf08baace))
* **react-18:**  upgrade react-spring to 9.4.5 (#1993) ([1b539a4c](https://github.com/plouc/nivo/commit/1b539a4c13e0c8127abec37758797426d59cdfeb))

#### Bug Fixes

*   remove required for labelYOffset in DotsItem ([d4daf2ce](https://github.com/plouc/nivo/commit/d4daf2ced6744bbff5ce6ddd3ff13419783edaa4))
* **axes:**  Avoid duplicate key error with time scales at millisecond precision (#1756) ([b372ec95](https://github.com/plouc/nivo/commit/b372ec9580f5e41ffc8a2c1ac60a4f180116fffd))
* **bar:**
  *  align d3-shape version with other packages (#2076) ([95a81d5c](https://github.com/plouc/nivo/commit/95a81d5c7d46daf9722e6a766bb39446fe9fc527))
  *  allow BarCanvas axis to be nullable (#1980) ([d15406e0](https://github.com/plouc/nivo/commit/d15406e0f969c7d263bcac7e8db13add58fb4bff))
* **codesandbox:**  fix typo in jsx prop assignment (#1960) ([2d8aaafc](https://github.com/plouc/nivo/commit/2d8aaafca3640f625931939e857a60def9397a8b))
* **core:**  ignore useMeasure hook if not in a browser context ([2763c4a2](https://github.com/plouc/nivo/commit/2763c4a28e5376457823b3be7940745c7f6feb8c))
* **line:**  make copy of points data before reversing ([45c31e94](https://github.com/plouc/nivo/commit/45c31e94dfae0505cddf5b66836d8dcda7f93388))
* **linting:**  fix bug in makefile script for linting an individual package (#1982) ([17e33766](https://github.com/plouc/nivo/commit/17e33766ba8e205fae281429e7a6bdc90535c9ed))
* **pie:**  fix custom tooltip not updated due to missing hook deps (#2089) ([9634f318](https://github.com/plouc/nivo/commit/9634f318514624ee0cedfaa48f5aa76e68ad6d8a))
* **sankey:**  include link's index in the React Component key when creating the SVG element (#2037) ([5985ab40](https://github.com/plouc/nivo/commit/5985ab40a8f6fdf22ae4c12a328344acd3eaab31))
* **scales:**  fix a TypeScript bug when creating log scales (#2001) ([43af675e](https://github.com/plouc/nivo/commit/43af675ee7fef5f41adb19daf69eef9913400358))
* **tooltip:**  fix positioning when charts are rendered inside an scaled div (#2034) ([a1a529c9](https://github.com/plouc/nivo/commit/a1a529c9f6121825d47127804a05623323e467d6))
* **xss:**  Fixed XSS security bug (#1929) ([f83ad7bd](https://github.com/plouc/nivo/commit/f83ad7bd26b0df489486771ac9ee28f99fff449f))



<a name="v0.79.1"></a>
## v0.79.1 (2023-07-31)


#### Features

* **colors:**  remove react-motion ([d68bd6d0](https://github.com/plouc/nivo/commit/d68bd6d00c29f9a6a5cd1cf21d03a42bffddd5ed))



<a name="v0.79.0"></a>
## v0.79.0 (2023-07-31)


#### Bug Fixes

* **tests:**  add resize-observer-polyfill when running unit tests ([312e18da](https://github.com/plouc/nivo/commit/312e18daa6ab8d715aa436cd690277bb6468af72))

#### Features

* **circle-packing:**  remove unused prop-types package ([a4b4dfae](https://github.com/plouc/nivo/commit/a4b4dfaea5471e0b9e9420af2a70ebe9fbe03f11))
* **colors:**  add support for continuous color scales ([f0867914](https://github.com/plouc/nivo/commit/f086791480c2742dde49ea80d1f0a7e671bb3aea))
* **core:**
  *  add support for legends ticks to nivo theme ([806da063](https://github.com/plouc/nivo/commit/806da0634178835d00a9daf8640f48ae427ae1a6))
  *  remove resize-observer-polyfill as it should be added if IE support is needed ([22f2bf70](https://github.com/plouc/nivo/commit/22f2bf70edb3c0b325e390fd9ff36ba2487b16bf))
* **generators:**  add a helper to generate x/y series ([15efb6e8](https://github.com/plouc/nivo/commit/15efb6e89459a3261c8bfa40714924ce31fb05b5))
* **heatmap:**
  *  adjust stories ([1867b606](https://github.com/plouc/nivo/commit/1867b606111ad1253cadb7e3cbcab2663c3275c5))
  *  add tests for forceSquare ([2cbda769](https://github.com/plouc/nivo/commit/2cbda7692d7b6978bdf46a07ec373883c7004505))
  *  restore forceSquare feature ([236e94c6](https://github.com/plouc/nivo/commit/236e94c64c09b4ae1481bbf14740e2a5826d9397))
  *  add tests for size variation feature ([fdc93a6a](https://github.com/plouc/nivo/commit/fdc93a6a85f287b53e78be3a1c6efe2cdf15c8ca))
  *  define a default legend config to prevent a crash when adding a new one on the interactive demo ([a9486b7a](https://github.com/plouc/nivo/commit/a9486b7a8199f0dc0f800996e5d9187da4cc866d))
  *  add missing event handlers to the documentation ([bac7d7a1](https://github.com/plouc/nivo/commit/bac7d7a1273a38c85794387f30f60084c625f7e8))
  *  restore size variation support ([849c7d7f](https://github.com/plouc/nivo/commit/849c7d7fadda9d20fe372dd194ed452f2dc9a0e0))
  *  fix the http API documentation ([a91066fd](https://github.com/plouc/nivo/commit/a91066fdf3264c9aab9b69f531d358b8c345e5e5))
  *  remove min/max value properties from the static package ([937604c3](https://github.com/plouc/nivo/commit/937604c3d4890ec4dcb8b405a66473b5113e220f))
  *  remove min/max value properties from documentation ([824b794a](https://github.com/plouc/nivo/commit/824b794a74f04d4fad40b09d8f8fc7e64a697f66))
  *  remove min/max value properties as they should be controlled where needed, for example the colors ([7a5a922b](https://github.com/plouc/nivo/commit/7a5a922b014ecfeed16c0f42c4833b7be4197288))
  *  add support for annotations for the canvas implementation ([9aaaad59](https://github.com/plouc/nivo/commit/9aaaad5966bab7d3886dfa4a0be60e5afc826248))
  *  add tests for hoverTarget ([d92ecd9c](https://github.com/plouc/nivo/commit/d92ecd9cde37d744b5dd0925391f7c6fa0b21343))
  *  add tests for layers and annotations ([35111f7b](https://github.com/plouc/nivo/commit/35111f7b215f718665404a7d80ae8cd1a0732230))
  *  init unit tests ([8f9ca823](https://github.com/plouc/nivo/commit/8f9ca823a0ac1061cdbfb776fec794c0d1ab33a1))
  *  fix missing hooks deps ([7025bb9d](https://github.com/plouc/nivo/commit/7025bb9db384dcf162713b57fab5c1c84819731e))
  *  update codesandbox example to reflect API changes ([da44298e](https://github.com/plouc/nivo/commit/da44298ef67480bbeff513ca0ed1f63e180613d5))
  *  restore support for empty values and empty color ([be1a8afa](https://github.com/plouc/nivo/commit/be1a8afae9492861b20941a5bc583061b9e86359))
  *  migrate canvas implementation to TypeScript ([d0cd5003](https://github.com/plouc/nivo/commit/d0cd500381294f0682eabd803b8c0ec3d652a713))
  *  add support for annotations ([262c34a5](https://github.com/plouc/nivo/commit/262c34a53bbd6c4dbd3eb8f914aed4647fd846eb))
  *  add the package to the monorepo TypeScript config ([6462c08f](https://github.com/plouc/nivo/commit/6462c08f198c9910ab854c89d77865255cdc93f6))
  *  update the website documentation according to API changes and additions ([b636e5cb](https://github.com/plouc/nivo/commit/b636e5cbec7ce2725af0f82cd8fd182272e01418))
  *  init TypeScript migration ([4929c468](https://github.com/plouc/nivo/commit/4929c4684fc4dd67945bc17f7a5ca34cfd4491d9))
* **legends:**
  *  fix continuous color scale legend when the direction is column ([b5527c1b](https://github.com/plouc/nivo/commit/b5527c1b5f9f1ca998333c846dc3e2eb973edd94))
  *  add support for canvas continuous color legends and add it to heatmap ([e3e8f002](https://github.com/plouc/nivo/commit/e3e8f00271ccea89b5cd5802ba80e4298a82e455))
  *  add support for continuous color scale legends ([e2203454](https://github.com/plouc/nivo/commit/e22034541527483b41b11eeff47399145fdd3bcc))
* **website:**
  *  add an open graph image for the homepage ([7b61ade4](https://github.com/plouc/nivo/commit/7b61ade41aea5c2947ed1beb310a1f07b3418528))
  *  add the ability to take pages screenshots ([e7e7d8ac](https://github.com/plouc/nivo/commit/e7e7d8ac47c125e9d10d6ddcd5367b9ea2b69b22))
  *  add more chart types to the homepage ([bd2c8ad5](https://github.com/plouc/nivo/commit/bd2c8ad551d8ec154d91161edc997b7dcd7e364c))
  *  make chart labels visible by default on the homepage ([01e6c340](https://github.com/plouc/nivo/commit/01e6c34089ead20d862c482a9734fca8a7b1bbdd))
  *  use static images for the homepage ([9ad4769d](https://github.com/plouc/nivo/commit/9ad4769d19744c0028ed62c2e6084b3cf89b44ac))
  *  create new demo charts for the homepage ([2c77f8d5](https://github.com/plouc/nivo/commit/2c77f8d5f5417d5048fe15e8fcd33c796378c8a7))
  *  improve color scheme controls ([f438ba6b](https://github.com/plouc/nivo/commit/f438ba6be266a469b5cf4ba9b9925765648b3ca4))
  *  improve typings of ComponentTemplate and use it at its full potential for the heatmap ([37136c9a](https://github.com/plouc/nivo/commit/37136c9a720c1cc894507df53a77227393aad87c))
  *  fix components explorer filtering ([bda98c8f](https://github.com/plouc/nivo/commit/bda98c8f064a64ceadfd3ca06d2cb52f21bff0c5))
  *  animate navigation toggle button ([16f89bbf](https://github.com/plouc/nivo/commit/16f89bbfb54f5877c584acabbd4e82595be44f45))
  *  convert all chart icons to TypeScript ([f23c5ebe](https://github.com/plouc/nivo/commit/f23c5ebe582ec0f1df8c718c55c4a7b879b2ea85))
  *  add a mobile nav and improve the sitemap data ([5b184314](https://github.com/plouc/nivo/commit/5b184314dbf4b9d3e9f105797741d229fa13249f))
  *  improve theming guide ([02da858b](https://github.com/plouc/nivo/commit/02da858b3b10f2c0f3e1f4d8f6bb22296a78d7be))
  *  change the max length of generated code lines to be 80 instead of 120 ([a55c272e](https://github.com/plouc/nivo/commit/a55c272e4a793d577758b59bade008fbc580e2c6))
  *  improve and reorganize controls ([3b433201](https://github.com/plouc/nivo/commit/3b433201327b4ae8cb0bc4111446f3375c9def08))
  *  inline global styles ([e0a0ffbb](https://github.com/plouc/nivo/commit/e0a0ffbb064e132a6fd8bc312042126559ac701c))



<a name="v0.78.0"></a>
## v0.78.0 (2023-07-31)


#### Features

* **chord:**
  *  fix various hooks dependencies issues ([5469cc9f](https://github.com/plouc/nivo/commit/5469cc9fb783f90c3872120a140553013a1f1136))
  *  add tests for active/inactive arcs & ribbons ([00d839ec](https://github.com/plouc/nivo/commit/00d839ecbd2387d9c513e124e9ae7525f08c9f36))
  *  rename properties related to active/inactive styles ([7c3e7a7a](https://github.com/plouc/nivo/commit/7c3e7a7ab68ee2f6a667a788221c100340fa51f0))
  *  init unit tests ([7c1d39b6](https://github.com/plouc/nivo/commit/7c1d39b68398d86a3da993ea55570c4ab8e9a0d1))
  *  update stories ([73467c9d](https://github.com/plouc/nivo/commit/73467c9d939dba10906b3d2688a9bf0b360f64f1))
  *  adjust website icon and home demo according to the new API ([90210e4d](https://github.com/plouc/nivo/commit/90210e4d0577730255c81e22bb95da2040ed69e5))
  *  migrate arc transitions to react-spring ([ebf01a18](https://github.com/plouc/nivo/commit/ebf01a18174c36b5fa7e3296b9428fa2791e052b))
  *  fix static mapping used for the http API ([a9926666](https://github.com/plouc/nivo/commit/a99266669ec3cec79e8e2c31ea3b9843a608bd55))
  *  migrate ribbons and arcs transitions to react-spring ([458ba58b](https://github.com/plouc/nivo/commit/458ba58b2b01245284970c2a7740cee78b17862a))
  *  init TypeScript migration ([16c316b7](https://github.com/plouc/nivo/commit/16c316b7e15a57f314a3f9a7230630869b75c427))
* **network:**  improve stories ([8faac86a](https://github.com/plouc/nivo/commit/8faac86aaa9da630e398d620e4b8a4a33b82a2ab))
* **treemap:**
  *  add unit tests ([64628e1f](https://github.com/plouc/nivo/commit/64628e1f1215f976db4c53d66a574e286b87b7f7))
  *  fix html parent label interpolation ([ba6071a3](https://github.com/plouc/nivo/commit/ba6071a334bc657afda369e9c07ce4657c1fdfd7))
  *  add support for custom layers to SVG and canvas implementations ([b45f0d11](https://github.com/plouc/nivo/commit/b45f0d116c06dbc4b8129f639fdd25e40ab15a39))
  *  adjust website according to new typings ([8946b02f](https://github.com/plouc/nivo/commit/8946b02fe312ef7007c4679179dde994670eda60))
  *  fix static mapping and sample ([a7a44000](https://github.com/plouc/nivo/commit/a7a4400076e151b21ea5828e5227a7ae5945b774))
  *  datum now just extends object ([0fdd6854](https://github.com/plouc/nivo/commit/0fdd6854cc03a221022facbce2754fdd263f51a1))
  *  add support for basic aria attributes to all flavors ([7213ca05](https://github.com/plouc/nivo/commit/7213ca0586076cd8bc5764f01009340c7730102a))
  *  fix static mapping and sample ([7b5b3939](https://github.com/plouc/nivo/commit/7b5b3939d53c14c3363001f0e1b3a9caeb632c32))
  *  migrate the package to TypeScript ([1795f712](https://github.com/plouc/nivo/commit/1795f7126f74f059573c8dfff17dbc221a7b251d))
* **website:**  fix api client layout ([36914f28](https://github.com/plouc/nivo/commit/36914f28a29b07e548f352db6f15d80e6bdd542d))



<a name="v0.77.0"></a>
## v0.77.0 (2023-07-31)


#### Features

* **annotations:**
  *  add outline opacity ([365f2610](https://github.com/plouc/nivo/commit/365f2610c5acc45cb7c9692b130888ec04fe3b1e))
  *  add support for border radius to rect annotations ([c0043507](https://github.com/plouc/nivo/commit/c0043507ba6ef500e25ef297e0c32efa9a094c2c))
* **network:**
  *  fix codesandbox example ([cda66831](https://github.com/plouc/nivo/commit/cda6683122213a19ba1a8c779016bf76832de22c))
  *  add missing tests ([ca5ee4e8](https://github.com/plouc/nivo/commit/ca5ee4e83fa72b591f0c613518fdc313532ad176))
  *  add support for canvas annotations ([aed35906](https://github.com/plouc/nivo/commit/aed35906f46d806d4b815f848c59412eee8fe70e))
  *  remove nodeBlendMode as it doesn't play well with link endings underneath ([bfbe9b69](https://github.com/plouc/nivo/commit/bfbe9b697e80466de84d82d975116e2ffcf04564))
  *  add the ability to control the center force strength ([609287da](https://github.com/plouc/nivo/commit/609287dab840c769e78de22fe4b74be7ad5bef37))
  *  add the ability to extend the links data structure via a generic ([7fdff22f](https://github.com/plouc/nivo/commit/7fdff22f97a9954f334c66bb292cb886b66a33b2))
  *  memoize default node & link components ([d70ad138](https://github.com/plouc/nivo/commit/d70ad1380df348622fd52cc8596cf9f555df652e))
  *  add basic tests ([07a1e333](https://github.com/plouc/nivo/commit/07a1e33376afb59eeb8ad57e3498ab475753e285))
  *  add support for active nodes and annotations ([5575928d](https://github.com/plouc/nivo/commit/5575928da59f2c03e69272ff4ec55bb52b35ccf5))
  *  forward aria props to SvgWrapper ([e91b04f7](https://github.com/plouc/nivo/commit/e91b04f7c8ec0fac92d588dfdfd78c8cafcb4ee9))
  *  fix remaining issues after rebasing against master ([90edbd01](https://github.com/plouc/nivo/commit/90edbd01c9c7b6f70fb9638ead64d859a68be925))
  *  update stories for custom components ([b6741dd5](https://github.com/plouc/nivo/commit/b6741dd5ba45ad61c4bc73b7e5b3b4a6e6626181))
  *  improve custom tooltip stories ([cbe9b21a](https://github.com/plouc/nivo/commit/cbe9b21a851c7b0eedbd2820829955c6f56a809b))
  *  add stories for custom node component and renderer ([8f13a530](https://github.com/plouc/nivo/commit/8f13a5305cfef3007d682600b9e58bf7909a1ee2))
  *  fix website icon due to API changes ([b115f701](https://github.com/plouc/nivo/commit/b115f701cc7addb351887bbc9dbb673f9ee933f7))
  *  network can be used in standalone mode via the useNetwork hook ([1b03cecd](https://github.com/plouc/nivo/commit/1b03cecd8070279cfac4dd5d7f802d382376c9d9))
  *  add support for custom link component ([2b26bf3d](https://github.com/plouc/nivo/commit/2b26bf3d137e60197eb3bf92e9a0d17e723f5d4e))
  *  add support for custom node component ([8e85cf1d](https://github.com/plouc/nivo/commit/8e85cf1d633130d5f64a1813323f9f2144a1af60))
  *  types are now valid ([c3d5dd1b](https://github.com/plouc/nivo/commit/c3d5dd1b2f3ba5b326f934741809eac548d97225))
  *  add support for generic node datum ([375252a5](https://github.com/plouc/nivo/commit/375252a5472d588ae1f6b9f0c4bd556dced49ba5))
  *  replace react-motion with react-spring and use the same component for static and animated variants ([82a2d05c](https://github.com/plouc/nivo/commit/82a2d05ccfdb745d3698e979c0960df8a0ad79ca))
  *  remove prop-types ([fa152f5c](https://github.com/plouc/nivo/commit/fa152f5cc8b050eaec3e3a8bb89b8acaf1faf43f))
  *  adjust old TypeScript definitions ([353010f7](https://github.com/plouc/nivo/commit/353010f79f56588782f001be3ac4ad4711be889a))
  *  remove deprecated license header from package ([0137c963](https://github.com/plouc/nivo/commit/0137c963b1f1ea62bdfe1c2626f3c3bb93364ca2))
  *  change all files extension to ts/tsx ([797c1311](https://github.com/plouc/nivo/commit/797c1311fbba45e236eab52fc391162287c7c0fe))
* **website:**
  *  add a dedicated control for chart annotations ([9060197e](https://github.com/plouc/nivo/commit/9060197e9192257a09a9902c950e87e491b789d1))
  *  add the ability to control charts annotations ([720716bf](https://github.com/plouc/nivo/commit/720716bf7150611e4138af5bda6be3b423bbcb0c))
  *  add a helper to generate common accessibility props ([63a7eb60](https://github.com/plouc/nivo/commit/63a7eb60472504bedbdaef238e54497b63efa19a))



<a name="v0.76.0"></a>
## v0.76.0 (2023-07-31)


#### Features

* **bump:**
  *  add tests for the AreaBump chart ([3f5ed416](https://github.com/plouc/nivo/commit/3f5ed416b451bdb7c4c33cd90623ddb65508690b))
  *  improve website documentation ([6bb16dc4](https://github.com/plouc/nivo/commit/6bb16dc481e96b519ebfc1005d61900317332a94))
  *  improve AreaBump typings and add support for series extra properties ([a68d98d1](https://github.com/plouc/nivo/commit/a68d98d1640746bd6252dfadedacf25b2ac3610d))
  *  fix Bump linting errors & warnings ([1afc0a4b](https://github.com/plouc/nivo/commit/1afc0a4bd078ea5701a00f384febf5449d39c307))
  *  improve website documentation ([235d85eb](https://github.com/plouc/nivo/commit/235d85eb34bae7b9537868a98318ed72ec892982))
  *  allow extra props for Bump data series ([ba2fca2e](https://github.com/plouc/nivo/commit/ba2fca2ef63f2527505013cb4982a2fe5f5e4185))
  *  add tests for the Bump chart ([90006b67](https://github.com/plouc/nivo/commit/90006b67491125f2a4fbb7ec9909b3fc79c04ae3))
  *  migrate @nivo/bump to TypeScript ([4be280b3](https://github.com/plouc/nivo/commit/4be280b3c9d9e23525e377d849b50267aa0b2d3d))
* **captures:**  improve the script used to generate charts' images & icons ([74d9872f](https://github.com/plouc/nivo/commit/74d9872ff0987254b9148ebe9cf9664b79cde886))
* **packages:**  use website captures in packages' READMEs ([f9f0acb2](https://github.com/plouc/nivo/commit/f9f0acb25466ed4902279f1caa129f33b3f3dfd6))
* **website:**
  *  continue migration to TypeScript ([fe2652fe](https://github.com/plouc/nivo/commit/fe2652fe3033273b3dbfe881520926ef8e31dccf))
  *  try to increase node memory limit for netlify ([7a244d20](https://github.com/plouc/nivo/commit/7a244d207c8c7533c319e0248cb03b6abc195248))
  *  use chart image for OG tags ([121491fd](https://github.com/plouc/nivo/commit/121491fdd360aa2a33376150b8e044c2cd4cf2d9))
  *  skip lib checks ([a597f171](https://github.com/plouc/nivo/commit/a597f1717e562110372b982c43642da396067559))
  *  add captures for all charts ([1daa7fe1](https://github.com/plouc/nivo/commit/1daa7fe1de4edc712b1ce0e3e28bc6cf62f60ab9))
  *  test chart SEO image with AreaBump ([c417b2b1](https://github.com/plouc/nivo/commit/c417b2b131e1c625668743858d657bd7e8915757))
  *  use netlify url if available ([4316288f](https://github.com/plouc/nivo/commit/4316288f7185eb7f85c693af4d026c88b69bec2c))
  *  run init before building for netlify ([d175ef70](https://github.com/plouc/nivo/commit/d175ef701e19825b0842c712d24c7a6a9246e65a))
  *  init support for netlify ([d68870e4](https://github.com/plouc/nivo/commit/d68870e4b3c90b79a5fcc11fda5e228346c2f919))
  *  improve SEO ([f39dc01e](https://github.com/plouc/nivo/commit/f39dc01e1af8b5c876ed51aaeb4d47794d6bfb5a))
  *  migrate the legends guide to TypeScript ([c3d76090](https://github.com/plouc/nivo/commit/c3d760905e78c4ce3cec996fe19262bfae21abb2))
  *  migrate the axes guide to TypeScript ([1f4f480e](https://github.com/plouc/nivo/commit/1f4f480ebc9f5f2b46194096781527e1a5ce9996))
  *  fix guides ([12d0f396](https://github.com/plouc/nivo/commit/12d0f396a2e97252009ec9d9a20c541ec4f41103))
  *  add traling slash to all URLs ([d7e7926d](https://github.com/plouc/nivo/commit/d7e7926dd4561bafb7c6db37ca0f2a74d8304735))
  *  adjust guides interactive demos to use the new control definitions ([7d17732e](https://github.com/plouc/nivo/commit/7d17732e1bfb0f59135a4016c62f99581c3bb025))
  *  normalize charts properties definition ([e9446233](https://github.com/plouc/nivo/commit/e94462334e8149e06c112c10d1acf28f1e17f612))



<a name="v0.75.0"></a>
## v0.75.0 (2023-07-31)


#### Bug Fixes

* **bar:**  avoid to redefine react forwardRef type ([cd6e3ec3](https://github.com/plouc/nivo/commit/cd6e3ec37791393f88519924778602ba9da06065))
* **build:**  fix error with duplicated typings for eslint by forcing the resolution of the package ([384e4240](https://github.com/plouc/nivo/commit/384e424070e313158dda140f4c12f8a76cffe9ee))
* **ci:**  fix triggers for the CI workflow ([0750223f](https://github.com/plouc/nivo/commit/0750223fc78721ed5e744b152b0f2d52c31efa2e))
* **core:**
  *  import missing SVGProps type ([feb6de60](https://github.com/plouc/nivo/commit/feb6de60ec34ce289792e72db3eaacd3dcf6814a))
  *  export linearGradientDef in typings ([7cfbfc96](https://github.com/plouc/nivo/commit/7cfbfc9623631cd94e165f25a1919cf9019dbdb3))
* **format:**  fix formatting issues ([7d03e9a3](https://github.com/plouc/nivo/commit/7d03e9a39b5439007740a1eabdf6b4eebcc4c4e4))
* **swarmplot:**  use the borderWidth property - fixes #1813 ([edd3990c](https://github.com/plouc/nivo/commit/edd3990c0846353c001853531948477ea7837500))
* **website:**  fix React runtime issue with Gatsby ([e36b06b3](https://github.com/plouc/nivo/commit/e36b06b30120db374d9163cbefe3eaa44ed8a9be))

#### Features

* **api:**
  *  create new @nivo/static & @nivo/express packages ([fc0f27ff](https://github.com/plouc/nivo/commit/fc0f27ff314f783713c3497d625a3f8992038512))
  *  fix heroku deployment ([a4dbb440](https://github.com/plouc/nivo/commit/a4dbb440c12fc8cd42153a039ed74ecfe87a5adc))
  *  migrate API to TypeScript and fix stale mappings and examples ([d53681b4](https://github.com/plouc/nivo/commit/d53681b439d3bac08e978491a56518b3fe9c98b5))
* **build:**
  *  init support for development builds ([643a1c95](https://github.com/plouc/nivo/commit/643a1c95a117d62d0e2c3a1ea7f6d60bfaae1994))
  *  fix build after upgrading a bunch of dependencies ([60cdbbbf](https://github.com/plouc/nivo/commit/60cdbbbf1a9f2631f0703f7c69f8d0cbbb9b6522))
* **eslint:**
  *  enable eslint for the website ([1ec5fbd0](https://github.com/plouc/nivo/commit/1ec5fbd0a8ff392aa185589c980f2f80fc6b48f9))
  *  enable eslint for the api ([35d4a4a7](https://github.com/plouc/nivo/commit/35d4a4a702251b8b098fb235b8d79b5d521f77fc))
* **storybook:**  upgrade storybook and addons ([64ac24e0](https://github.com/plouc/nivo/commit/64ac24e048a333155887c0a94f3accebd2362014))
* **ts:**  upgrade TypeScript version ([eff43e28](https://github.com/plouc/nivo/commit/eff43e2865c337e2c1aae263f92e548a51756c33))
* **website:**
  *  update the API url to match the new path ([ec6e7d96](https://github.com/plouc/nivo/commit/ec6e7d963baa72aec959cc4c62e74ee6a6204662))
  *  fix gatsby build due to dependencies updates ([6bfeaa86](https://github.com/plouc/nivo/commit/6bfeaa86e443359dfcd77fe7f26ea48a49a2388f))
  *  update gatsby ([50778907](https://github.com/plouc/nivo/commit/50778907b4c76f0a32b617117f640ff5e465b13d))



<a name="v0.74.1"></a>
## v0.74.1 (2023-07-31)


#### Bug Fixes

* **radial-bar:**  remove unnecessary console log ([dd72cd41](https://github.com/plouc/nivo/commit/dd72cd4167d9456a461040007beae6eca4970c95))

#### Features

* **defs:**  allow gradientTransform to be passed to gradient definitions, fixes #1098 (#1812) ([76062b53](https://github.com/plouc/nivo/commit/76062b534db9bf46208661cf05c7b549ec797cce))
* **radar:**  add support for patterns and gradients (#1807) ([0b3bdb0b](https://github.com/plouc/nivo/commit/0b3bdb0bc8bca177851d876446f79754026fcdb6))
* **radial-bar:**  update website package as it is now published ([2757063c](https://github.com/plouc/nivo/commit/2757063c4dbcf64f4390d4490b4e2501331eeb15))



<a name="v0.74.0"></a>
## v0.74.0 (2023-07-31)


#### Features

* **bar:**
  *  remove recompose from dependencies ([dda2edfe](https://github.com/plouc/nivo/commit/dda2edfee141341daaa4ee491eca25b551c5ad77))
  *  ignore TS error when importing source from stories/unit tests ([bf4061ae](https://github.com/plouc/nivo/commit/bf4061ae764eeec9706ba8947f5db2b8c77ad534))
  *  adjust unit tests for new data ([53811a52](https://github.com/plouc/nivo/commit/53811a52a1ad1affbe3570c89d20e09aa0b93e7c))
  *  pass bar data to bar item aria attribute generators ([b7347736](https://github.com/plouc/nivo/commit/b734773625481adeaf46cf6ed2f8ab493e83a7b7))
  *  fix tooltip position when triggering it from focus ([8c139c34](https://github.com/plouc/nivo/commit/8c139c3454884abbb9d4893b634c84b2de2e62ef))
  *  exclude aria props from canvas bar item renderer ([95f9b15d](https://github.com/plouc/nivo/commit/95f9b15d626408ac18d8768bb60a63236724ae30))
  *  remove bar item focus handler event as it's not used ([3c3e8fcc](https://github.com/plouc/nivo/commit/3c3e8fcc34cd221eafdde429a6f65c2f43972515))
  *  add a generic hook to handle both SVG and canvas implementations ([75481c61](https://github.com/plouc/nivo/commit/75481c61a4d3b6b61062cfff136c0241b6ad3585))
  *  enable tooltip for keyboard based navigation ([8a32e501](https://github.com/plouc/nivo/commit/8a32e50174b11b27a70082ebc1117228368c1fa3))
  *  add labelledby and describedby aria attributes support to SVG bar item component ([ce11205d](https://github.com/plouc/nivo/commit/ce11205d641424bd33cc9ff2e392b5dd935b5883))
  *  add aria attributes support to SVG bar component ([b6e930f9](https://github.com/plouc/nivo/commit/b6e930f9322c20138e3bb13cb034064b05db2208))
* **bullet:**  add custom tooltip (#1694) ([75eafa18](https://github.com/plouc/nivo/commit/75eafa185d1d1cceeaacad589288f82d5d724842))
* **bump:**  add missing line props in TS definition (#1787) ([69aef61b](https://github.com/plouc/nivo/commit/69aef61b5853556aba730fb819e37e1844b772f4))
* **core:**
  *  upgrade react-spring ([2cb0fffc](https://github.com/plouc/nivo/commit/2cb0fffc77190b9a85c8abf79adb280b70eaf1ed))
  *  fix typings for ValueFormat context support ([828e06b4](https://github.com/plouc/nivo/commit/828e06b411222e38640338c772e3cd3905291e70))
  *  add typings for d3 curve factories ([bdb231ce](https://github.com/plouc/nivo/commit/bdb231ce1ea50bea31a495a17908d37cbb4ca9da))
  *  remove unused withCurve and withHierarchy HOCs ([6fdd4839](https://github.com/plouc/nivo/commit/6fdd48394da78448796d008785526eb1a938363c))
  *  remove make targets related to example projects ([a6fde221](https://github.com/plouc/nivo/commit/a6fde2219a19bd81d8c7820d47744fe42b573fc3))
  *  do not use false as a default for focusable attribute in SvgWrapper for BC ([3825b12b](https://github.com/plouc/nivo/commit/3825b12b65726bb07be8eda8400ebcc9c270a494))
* **defs:**  hide SVG defs for screen readers ([ae7d5378](https://github.com/plouc/nivo/commit/ae7d5378625536d46c7269ec054e860abe50b85f))
* **examples:**  remove retro and typescript example projects ([10aa6df2](https://github.com/plouc/nivo/commit/10aa6df2192280e07cef3042b3172718370436db))
* **funnel:**
  *  improve unit tests for separators ([6982b3d6](https://github.com/plouc/nivo/commit/6982b3d6d9a6bd9b592155730babe17f9c328eb7))
  *  migrate to TypeScript ([d3767aed](https://github.com/plouc/nivo/commit/d3767aedcb8bfa5880e83a3ee658f3519392c804))
* **polar-axes:**
  *  accept different scale types ([26b3161b](https://github.com/plouc/nivo/commit/26b3161b8c205ac7c19bd4413104881c96b282de))
  *  init package ([490b761a](https://github.com/plouc/nivo/commit/490b761a6e2772fb91555e9d3da54ea2e52bf89e))
* **radar:**
  *  allow customization of legend data (#1786) ([4a4583f4](https://github.com/plouc/nivo/commit/4a4583f4f3716e9f1e33dbdaa962109301ba52c6))
  *  add support for custom layers ([3271a6b9](https://github.com/plouc/nivo/commit/3271a6b9792cb871cb4f8f98f67548ac91661918))
  *  add tests for value formatting ([e259c040](https://github.com/plouc/nivo/commit/e259c0404e8a107ec86e5644daaaff90ae7af08b))
  *  add support for custom slice tooltip ([bb81efbe](https://github.com/plouc/nivo/commit/bb81efbec9ccea2c5b68be2826ce52b00703c861))
  *  improve dots related typings ([2e696337](https://github.com/plouc/nivo/commit/2e696337df34e453aeeb852616f731ed72fff8d0))
  *  restrict data to objects ([e0adf5af](https://github.com/plouc/nivo/commit/e0adf5afb72b3466346e55c25245287c57f1b892))
  *  fix new typings ([17bf1742](https://github.com/plouc/nivo/commit/17bf17423b35c16c3495b8af104b162aa68211f3))
  *  fix typings ([113a6e22](https://github.com/plouc/nivo/commit/113a6e22e9c6f6dd1f1e691b4f76b508f50732c0))
  *  adjust stories and convert to new storybook format ([062ab4e2](https://github.com/plouc/nivo/commit/062ab4e2ba2f3a86f82031fb75ba41e4d3b7b073))
  *  init TypeScript migration ([8e898d56](https://github.com/plouc/nivo/commit/8e898d5604a6803409f2fa22cc40254600cae0fc))
  *  fix radar radial grid lines style theme property (#1754) ([d9213a78](https://github.com/plouc/nivo/commit/d9213a78ac06f0bf433cbe0f91d1ccd081f8a55b))
* **radial-bar:**
  *  generate icon and screenshots ([399215b6](https://github.com/plouc/nivo/commit/399215b6e1d00274a0a8278fa64a6152f7079520))
  *  add the ability to specify a static max value ([6144dbb1](https://github.com/plouc/nivo/commit/6144dbb17c2d851edba784f95c61aacf04f79b59))
  *  add controls for radial & circular axes to the demo ([587b179c](https://github.com/plouc/nivo/commit/587b179c55483733d89a0e3c54f774703580a49b))
  *  add stories ([88e05dda](https://github.com/plouc/nivo/commit/88e05dda9a1f940ea931431df93beb38bccef832))
  *  add circular axes ([c65a1c9b](https://github.com/plouc/nivo/commit/c65a1c9b3d40bd60af906eed2d6a09932474adf8))
  *  isolate polar axes components in their own folder to easily move them to a dedicated package ([ab8e2597](https://github.com/plouc/nivo/commit/ab8e2597377627231e510ac4eff96bce836fa286))
  *  fix typo in website dimensions properties ([3ac27b14](https://github.com/plouc/nivo/commit/3ac27b146a8a1619509a9cc03c27bc1148beb24a))
  *  add the ability to customize inner radius ([3fb05676](https://github.com/plouc/nivo/commit/3fb056762a5af2e3bdb6e21e36bb6e87e4632b38))
  *  add unit tests for tracks ([26a27ba3](https://github.com/plouc/nivo/commit/26a27ba3bf9a5bb2bac173eae41c9be93f152243))
  *  update package README ([06f63999](https://github.com/plouc/nivo/commit/06f63999dbac938ad722c085fecfb5acc747cba6))
  *  add unit tests ([8c1bf1a8](https://github.com/plouc/nivo/commit/8c1bf1a8ef5ffc68f0fdae818ae6fbc08d0298e1))
  *  support custom datum via generic ([883f8486](https://github.com/plouc/nivo/commit/883f8486f9a0edd9d859efd1e64d638441ec2550))
  *  improve polar grid transitions ([aa9ea046](https://github.com/plouc/nivo/commit/aa9ea046f35c9f6bcd89cfa1590396de609cfd97))
  *  add support for circular grid ([8c1f2f52](https://github.com/plouc/nivo/commit/8c1f2f527f30e1c8b473b6cd1e960b2d7aaa0397))
  *  add support for padAngle ([9a8f03f8](https://github.com/plouc/nivo/commit/9a8f03f826efe7852ac3a2f32359013503c94234))
  *  add tracks ([729ac4c7](https://github.com/plouc/nivo/commit/729ac4c776cb6fe20467b3599d2871b6fb3eec4a))
  *  add legends and ability to finetune style ([f23b988a](https://github.com/plouc/nivo/commit/f23b988aed909aa3798caea213e324b9d6513722))
  *  add support for labels ([e6bab88a](https://github.com/plouc/nivo/commit/e6bab88aec5cf66aa09fbf1bbe25e73e2bbdb015))
  *  use the @nivo/arcs package ([5ec257f1](https://github.com/plouc/nivo/commit/5ec257f13713f125db0d2c20dd456e7d48d3180c))
  *  improve documentation about the data structure ([d8fd7699](https://github.com/plouc/nivo/commit/d8fd7699f3ff97009c0ae149fb8a1ab76bb73f70))
  *  add support for tooltip and mouse handlers ([d4f8c47a](https://github.com/plouc/nivo/commit/d4f8c47ab80ed82bd666b394ad87dd273eded424))
  *  init package ([126e1f93](https://github.com/plouc/nivo/commit/126e1f93a0ae338ed40a18b540119cde04c3513b))
* **sankey:**
  *  add package to TypeScript monorepo config ([883b10ad](https://github.com/plouc/nivo/commit/883b10ad02e3a0410462cc7485433f78ad272b45))
  *  update stories to use new storybook format ([1494170c](https://github.com/plouc/nivo/commit/1494170cb73f464639d9cc3f0a6aa5d6aa5e4e9f))
  *  use generics for nodes and links ([e59add96](https://github.com/plouc/nivo/commit/e59add965f4cdc619797de30046868eaa7a7ef41))
  *  init TypeScript migration ([5b907274](https://github.com/plouc/nivo/commit/5b907274c88aff3ea6d897f35aa58a0ee3305c03))
* **scales:**
  *  fix old imports from axes package ([81c72ccd](https://github.com/plouc/nivo/commit/81c72ccd0df3c98768ea065f7f0aa1ed54d7c9c1))
  *  move ticks logic to the scales package ([801c7675](https://github.com/plouc/nivo/commit/801c767597d6c247552def1e09c1419fe956c908))
  *  forward generic types from stackX/stackY to stackAxis ([8e774c0c](https://github.com/plouc/nivo/commit/8e774c0c685d879178731cb26e718e0d6afde21f))
* **scatterplot:**
  *  convert stories to new format ([af87639d](https://github.com/plouc/nivo/commit/af87639d8d87d565217c3ce74ec82ba4a12458c2))
  *  add tests for date based data ([95bbe5c2](https://github.com/plouc/nivo/commit/95bbe5c283d9fa42aba6e7c52ba1c4c295724178))
  *  add unit tests for annotations ([a0d3b866](https://github.com/plouc/nivo/commit/a0d3b866a226fc2df9e47e058ee681ca9fce4cc0))
  *  add unit tests for markers ([8afb16a1](https://github.com/plouc/nivo/commit/8afb16a1b05a382f8b8dd17921664f8d44ea3e23))
  *  enable format editor in doc for x/y format ([aa55260f](https://github.com/plouc/nivo/commit/aa55260f23987629993f4c0522fa9701ca09c815))
  *  flatten node props ([1be2e324](https://github.com/plouc/nivo/commit/1be2e324f48a81187bc69e86d532fd5bf5ee1b9e))
  *  add unit test for aria props ([c8ed443b](https://github.com/plouc/nivo/commit/c8ed443b50214277b6d87f753ac968b6036601ea))
  *  add support for custom layer to ScatterPlot prop type ([cb0fce8f](https://github.com/plouc/nivo/commit/cb0fce8f1b7e1951543789b71a071ea7b49eb707))
  *  ignore TS error when importing source from stories/unit tests ([837be3ee](https://github.com/plouc/nivo/commit/837be3eedf121d3cf5eafffda651c914f8d883ab))
  *  move style.color to color in node data, fix typing issues in stories ([56fdbd41](https://github.com/plouc/nivo/commit/56fdbd41812118e47c61f66c491a091aaa9b7431))
  *  adjust stories according to API changes ([816a4783](https://github.com/plouc/nivo/commit/816a4783e72dbf0f0d80a793fbf56f3f61db9026))
  *  migrate from react-motion to react-spring ([c1b84c98](https://github.com/plouc/nivo/commit/c1b84c98562c64b34b1c18d6d5e32925187f08b5))
  *  migrate package to typescript ([34e6d377](https://github.com/plouc/nivo/commit/34e6d3772ea25b29c8ef7046aac3abc91f55aa15))
* **stream:**
  *  convert stories to new format ([d58ca1c4](https://github.com/plouc/nivo/commit/d58ca1c4438731e21dc29ec1dd24d1bc2456df4d))
  *  add unit tests for custom tooltip components ([d24f23e2](https://github.com/plouc/nivo/commit/d24f23e29d5fff8cd57e7f8643f8bb82c9246d8d))
  *  add support for custom tooltip and stack tooltip ([3b8fde15](https://github.com/plouc/nivo/commit/3b8fde15fd916bd27f25db0a8798a95b86a5b407))
  *  add unit tests for dots ([a7f56db2](https://github.com/plouc/nivo/commit/a7f56db2ab5af497f77ff7d65066612d79e9409b))
  *  add support for custom layer ([fa5d6e63](https://github.com/plouc/nivo/commit/fa5d6e637096e7fd7b2e10c64df2f5249583e6b9))
  *  add documentation about aria attributes ([e202437a](https://github.com/plouc/nivo/commit/e202437aa0d3cbc139a32d2dc0a2e8eaeb65e134))
  *  add aria attributes to the root SVG container ([60741652](https://github.com/plouc/nivo/commit/6074165249d82d393aae9b038628f623f98c9e81))
  *  adjust website documentation according to API changes ([c94f5e28](https://github.com/plouc/nivo/commit/c94f5e28e12aad1a50d1a7ad85c76a6fbfd9d0da))
  *  migrate stream package to TypeScript ([e6f4c70b](https://github.com/plouc/nivo/commit/e6f4c70bae8fc50a36c79f83e2c64964bdfb287a))
* **timerange:**  add from, to, and emptyColor props (#1722) ([d49a7903](https://github.com/plouc/nivo/commit/d49a79034ba4fe13ed53f2163a0e511953fc61c0))
* **website:**
  *  improve data log when clicking on funnel parts ([6f67fc39](https://github.com/plouc/nivo/commit/6f67fc39e91b412844617f3f2f1b8d49cfcf9311))
  *  improve typings for ComponentTemplate ([f9395545](https://github.com/plouc/nivo/commit/f9395545d9690ab221e58569a1d8d68978147b2d))
  *  improve typings of charts props documentation ([ace1a66d](https://github.com/plouc/nivo/commit/ace1a66d753b7479fdd71d773c8b1c42e1cced67))
  *  convert chart props files to TypeScript ([b57d8b07](https://github.com/plouc/nivo/commit/b57d8b070a895337d115c00efb8f9157cdb98b87))
  *  convert a few control components to TypeScript ([56f8ae68](https://github.com/plouc/nivo/commit/56f8ae685231f9e6861f233df7f0b08295ea92f6))
  *  add typings for theme ([39ff4927](https://github.com/plouc/nivo/commit/39ff49270951d6c221394a2750a06b320bdc3e9d))
  *  update code according to react-markdown API changes ([74fdbbb6](https://github.com/plouc/nivo/commit/74fdbbb6579b0d6dd5cb5b4ff41f37ac83a1cf92))
  *  upgrade gatsby dependencies ([cc3e3913](https://github.com/plouc/nivo/commit/cc3e3913b28e36fe908341f5992376dfb79689a0))
  *  add markdown support to component properties help content ([a5aa25cd](https://github.com/plouc/nivo/commit/a5aa25cd54a40b989030f16bf3df39308daa14cc))
  *  improve accessibility of component tabs ([57406d0c](https://github.com/plouc/nivo/commit/57406d0c6571c68ff9aceefb1a9ee676c81f36e5))

#### Bug Fixes

* **website:**
  *  do not try to run dedent when help text is undefined ([5ba75a94](https://github.com/plouc/nivo/commit/5ba75a949958965dfeda1d623fab47ed834a114c))
  *  fix invalid dependency for useMemo ([06be0276](https://github.com/plouc/nivo/commit/06be027614eef46564a124a30cfcff809181c73c))



<a name="v0.73.1"></a>
## v0.73.1 (2023-07-31)


#### Bug Fixes

* **bar:**  fix animation regression (#1687) ([13135238](https://github.com/plouc/nivo/commit/13135238ab73ccaa6bd23fefd7e5078a6ed38a62))



<a name="v0.73.0"></a>
## v0.73.0 (2023-07-31)


#### Bug Fixes

* **axes:**  support null props to Axes component ([0ed6676e](https://github.com/plouc/nivo/commit/0ed6676e83041dfff8ac51045e2469014ce9810d))
* **bar:**
  *  support null axis* props ([156b88ad](https://github.com/plouc/nivo/commit/156b88ad39a7afd0a663753ddf3e007fc4fdc338))
  *  fix animations when swapping keys (#1656) ([f665bc3a](https://github.com/plouc/nivo/commit/f665bc3afb6224accbd0486bf01abdf3c4672482))
* **bullet:**  add missing range/measure border color/width props (#1645) ([2e5df09f](https://github.com/plouc/nivo/commit/2e5df09fdb8bda38f7a68a68f4a17f0bc0c1619d))
* **bump:**  support null axis* props ([1c42e119](https://github.com/plouc/nivo/commit/1c42e1199a97e01d5e23a86af41e11ff2fc6e856))
* **line:**
  *  use correct motion types (#1685) ([3e0f074c](https://github.com/plouc/nivo/commit/3e0f074c24ee2495c0af7b74b221336b53aa132b))
  *  make copy of lines data before reversing (#1644) ([47e963ac](https://github.com/plouc/nivo/commit/47e963ac5500671963c9b6e994d684d48e0fc92f))
* **marimekko:**  support null axis* props ([d8dbea2f](https://github.com/plouc/nivo/commit/d8dbea2fe7f435b5b258933f58593815c9bd065e))
* **scales:**  handle empty series with timescale (#1683) ([81880cc5](https://github.com/plouc/nivo/commit/81880cc5b207c1c2ac64e0d340b00d68356c8e87))
* **website:**
  *  show treemap data correctly (#1643) ([de05d726](https://github.com/plouc/nivo/commit/de05d7265cae7d98bfdd6fae4629bb4c51a41922))
  *  update bar api page ([9c00efaa](https://github.com/plouc/nivo/commit/9c00efaafa7d6f669f501d7665baf58b8ea4b25a))



<a name="v0.72.0"></a>
## v0.72.0 (2023-07-31)


#### Features

* **bar:**
  *  add custom renderer support ([459e74c8](https://github.com/plouc/nivo/commit/459e74c8d4dcdaa39419e68e729eeb81dcb3d90d))
  *  add layers support to canvas flavor ([c39e91f5](https://github.com/plouc/nivo/commit/c39e91f5121a91598008d50e5ec88fd72fb608d4))
  *  add annotations/borderRadius to canvas flavor ([31438233](https://github.com/plouc/nivo/commit/3143823390206bcedc90e6a220d95f28e2b9205d))
  *  enable labels for canvas flavor ([602c1c3c](https://github.com/plouc/nivo/commit/602c1c3cdca182906f37e2a256ad780b3c1a93ab))
  *  convert canvas flavor to functional component ([3cac1d56](https://github.com/plouc/nivo/commit/3cac1d5612540f17fb368ac978af12da1abadcbe))
  *  add support for valueFormat ([e142895f](https://github.com/plouc/nivo/commit/e142895f6cffcfb024b199a679d70cdcd25f3fc3))
  *  add ability to customize legend label ([3f0bb4e2](https://github.com/plouc/nivo/commit/3f0bb4e205529ff0b7b542931e6515b3c99dd248))
  *  support initialHiddeIds prop ([29a80c6f](https://github.com/plouc/nivo/commit/29a80c6f88626b3a47e84d4a2cd19f595ef6186e))
  *  switch from react-motion to react-spring ([abef1fae](https://github.com/plouc/nivo/commit/abef1faece7bea96c8da3bfc4dd9a2e7342f10a5))
  *  migrate package to typescript ([10ae918f](https://github.com/plouc/nivo/commit/10ae918fbce0f5f9c5c48c06b4f28b7c1709cd0c))
* **bullet:**  support minValue/maxValue properties (#1635) ([86c5d81e](https://github.com/plouc/nivo/commit/86c5d81e073fb4eda71c35dd5a8fe52f7cbd2af9))
* **calendar:**  expose weekdayTicks prop on TimeRange component (#1634) ([efafa016](https://github.com/plouc/nivo/commit/efafa0165512801a0438e4d4e08ae07343639e0a))

#### Bug Fixes

* **axes:**  update scale types to use @nivo/scales ([0f4271d2](https://github.com/plouc/nivo/commit/0f4271d233f008ec31d8cf9a2c80253e706f064d))
* **bar:**
  *  remove inconsistencies with legends ([2a0dabf8](https://github.com/plouc/nivo/commit/2a0dabf8bc08b5b477abcf571c2b750d466aca5a))
  *  fix missing key warning ([137fb8db](https://github.com/plouc/nivo/commit/137fb8dbe414df330786d073e832e4f163cacdba))
  *  don't crash with valueScale.type === 'log' ([75f0dadf](https://github.com/plouc/nivo/commit/75f0dadfe59f53ccef5fa1fd2eede2ada70a82f6))
  *  fix type errors ([d4d7573f](https://github.com/plouc/nivo/commit/d4d7573f726d9adb01d1acfa1797d2aa0c8cf253))
  *  fix bar tooltip props ([80f43527](https://github.com/plouc/nivo/commit/80f43527e143f14a656d1fd21c9c7251c16f6dd0))
  *  fix broken tests ([bc1eb1bf](https://github.com/plouc/nivo/commit/bc1eb1bf85235985f676f3733fec144549a85bf8))
* **build:**
  *  move scales above axes ([e9ba49ec](https://github.com/plouc/nivo/commit/e9ba49ec8c15c5832a58e4792409460613952d8c))
  *  move voronoi up in the references ([33a0cdbc](https://github.com/plouc/nivo/commit/33a0cdbc1e3069972b817981b6ebd32b951035f0))
* **bullet:**  fix broken tests ([d508d10b](https://github.com/plouc/nivo/commit/d508d10b77fbfbcadb11fdd50590143e9a5b592d))
* **bump:**  provide datum to InheritedColorConfig type ([48373c13](https://github.com/plouc/nivo/commit/48373c13050c2f724f0c717fb82f285e0e789db0))
* **chord:**
  *  provide datum to InheritedColorConfig type ([a9f392eb](https://github.com/plouc/nivo/commit/a9f392ebe8664fb51b072aadbf0d86acd58d88e8))
  *  fix missing typescript properties (#1636) ([8752e396](https://github.com/plouc/nivo/commit/8752e39632b9393acd73b9a9d7f1090786ab97e5))
* **radar:**  provide datum to InheritedColorConfig type ([dcf85170](https://github.com/plouc/nivo/commit/dcf8517061a568da8a22a2f464c5cdf51420c83e))
* **sankey:**  use node color for link color (#1615) ([1002edb5](https://github.com/plouc/nivo/commit/1002edb5d9bd7f356dae3622bfe2003d0dbfc040))
* **storybook:**  add configuration to make it work again ([eb308f1c](https://github.com/plouc/nivo/commit/eb308f1c1bbbb46d66ae0c6262f23aadf4684bac))
* **website:**  update bar tooltip to prevent crash (#1627) ([0dd20f1d](https://github.com/plouc/nivo/commit/0dd20f1dbfdc58fe52df4f7fefdc4a2095eff442))



<a name="v0.71.0"></a>
## v0.71.0 (2023-07-31)


#### Features

* **annotations:**
  *  move offset to annotation spec ([d2565c86](https://github.com/plouc/nivo/commit/d2565c864977bf2b3d562662266c5af6c0bc34b6))
  *  improve svg & canvas note type handling ([bf0ba03c](https://github.com/plouc/nivo/commit/bf0ba03c310a204be64ca098376a6bf9a204f718))
  *  refine typings and fix integrations ([e808e256](https://github.com/plouc/nivo/commit/e808e2563359db74fc7314c26a61c8614d7c70c2))
  *  fix theme for annotations ([f3649330](https://github.com/plouc/nivo/commit/f364933072b3bfcd345155f5d2c4787cf58b06ef))
  *  migrate to TypeScript ([fe53f274](https://github.com/plouc/nivo/commit/fe53f27413456cfd372fb4a9fdcda92e7a3d4e64))
  *  remove license headers ([62f07196](https://github.com/plouc/nivo/commit/62f07196183c0cd31181de712392b91ed2666f36))
  *  init TypeScript setup ([c0b36352](https://github.com/plouc/nivo/commit/c0b363521934ae6e12aa75f12f89068b88c8c73c))
* **bar:**  add ability to toggle serie via legend item (#1556) ([0def428c](https://github.com/plouc/nivo/commit/0def428c5d3ecf70fd4b6c92c5e7f80dda5c02d2))
* **bump:**  add additional props to custom layers (#1560) ([8bd5a77a](https://github.com/plouc/nivo/commit/8bd5a77a08426896934cc8805640eb1cab1a53ca))
* **calendar:**
  *  migrate package to typescript (#1558) ([4e8280da](https://github.com/plouc/nivo/commit/4e8280da3fd9188341795402ce7b932c045662a0))
  *  add TimeRange component and storybook (#1503) ([8245fbd4](https://github.com/plouc/nivo/commit/8245fbd448367eec4ff253e0d20b429008aea79b))
* **deps:**  upgrade d3-time-format ([ed792656](https://github.com/plouc/nivo/commit/ed7926568c5e1f1abc0a56146685280f6f96d545))
* **generators:**  add generateOrderedDayCounts function ([fbcadd70](https://github.com/plouc/nivo/commit/fbcadd70447cef99198683bdd115359bc14b38ae))
* **line:**  add ability to toggle serie via legend item (#1555) ([463d380e](https://github.com/plouc/nivo/commit/463d380ece4b0df6785b73ea822bbe5f6d206e39))
* **network:**  add onClick support for node (#1568) ([c9156aac](https://github.com/plouc/nivo/commit/c9156aac1bed6b580aca33fb8ebad4c203f5ea4d))
* **pie:**  add ability to toggle serie via legend item (#1582) ([23059e02](https://github.com/plouc/nivo/commit/23059e02a430ae2cdd9814c5b99caa1d41ce7913))
* **scales:**
  *  migrate code to TypeScript ([4c309fa1](https://github.com/plouc/nivo/commit/4c309fa1c5e3119e7f1f0629d83e92228356adc6))
  *  remove license headers ([f558a7db](https://github.com/plouc/nivo/commit/f558a7db149aa122fec20373e2417738eeea4837))
  *  init TypeScript setup ([598a9c7d](https://github.com/plouc/nivo/commit/598a9c7d90242b3b50d11da96b0e259e585c4640))
  *  add reverse option to symlog scale ([5c0cc65f](https://github.com/plouc/nivo/commit/5c0cc65f95c59200345ce524f8095b26118be57d))
* **scatterplot:**  add ability to specify nodeId accessor ([343ef6f1](https://github.com/plouc/nivo/commit/343ef6f137fa494381a62501f5b36a7184d1c1c4))
* **stream:**  add ability to customize legend label ([780954af](https://github.com/plouc/nivo/commit/780954afe4f2c13e7499db24484c04ab19433f39))
* **swarmplot:**
  *  fix stories ([49beadf9](https://github.com/plouc/nivo/commit/49beadf926cf2edc395e54c34ce485282d93a8f1))
  *  migrate to TypeScript ([a7f56ed7](https://github.com/plouc/nivo/commit/a7f56ed7d43fc7a2f023323e7b4a66f054741ecf))
  *  remove license headers ([8228f8b9](https://github.com/plouc/nivo/commit/8228f8b9f6a0c7e7fe3410dfce641bb2940c7e35))
  *  init TypeScript setup ([39c1c721](https://github.com/plouc/nivo/commit/39c1c721550df01682fde663fefab30bd91b51ea))
* **website:**
  *  add TimeRange icon ([9c69a5fc](https://github.com/plouc/nivo/commit/9c69a5fc036d766226264a56e3d10da41afa5172))
  *  add TimeRange component ([fec51a18](https://github.com/plouc/nivo/commit/fec51a18d7a78e4e64eec9b8a222b2441904dcb3))

#### Bug Fixes

* **axes:**  fix time scale bug with days crossing a new month (#1565) ([cc27a856](https://github.com/plouc/nivo/commit/cc27a856d983685ac363fd93ea0b5a9f9c68b82e))
* **bar:**
  *  get working with scales updates ([48880b43](https://github.com/plouc/nivo/commit/48880b4394d10b7a80c277a3006d001829bf486f))
  *  fix when values are updated from 0 in grouped mode (#1585) ([8ff82034](https://github.com/plouc/nivo/commit/8ff8203487dbd4e4da6c577db0d9e87608373146))
  *  fix inconsistency with custom tooltip ([2479df38](https://github.com/plouc/nivo/commit/2479df384b60094994d812a54324e96dc04914c6))
* **calendar:**  update TimeRange component for consistency ([23d569c6](https://github.com/plouc/nivo/commit/23d569c6d77d9ba047b64c3de06edd637f49f495))
* **legends:**  update proptypes to avoid generated type error ([f0acb818](https://github.com/plouc/nivo/commit/f0acb818bc1f0bb6357c88354ef763ae2af0a500))
* **line:**  get working with scales updates ([c2e9631b](https://github.com/plouc/nivo/commit/c2e9631b98914def4f5c0612c369d4f3f4fb4819))
* **pie:**
  *  correct argument type to usePie hook ([191e3e0b](https://github.com/plouc/nivo/commit/191e3e0b5666f876805c20c1ff10ce18352dd50a))
  *  use legend.data property if supplied ([acdfa902](https://github.com/plouc/nivo/commit/acdfa9021950bb5ddb9ff64dc6363f83af51138e))
* **scales:**
  *  fix casing of symlog ([c2a656e2](https://github.com/plouc/nivo/commit/c2a656e234e41646c16e2e8ba63dead811f804f7))
  *  fix time scale when value is date ([4a125b8f](https://github.com/plouc/nivo/commit/4a125b8f13ec8088ac267d458efd2ff2e820f026))
  *  linear scale when stacked types ([7393acf5](https://github.com/plouc/nivo/commit/7393acf559f22b59c5638f310d8382e90ef3231f))
  *  get all tests passing ([dc8ac365](https://github.com/plouc/nivo/commit/dc8ac3659c73a1e72cd66048973bd3302d1878d6))
  *  get code to compile ([2d5ebe71](https://github.com/plouc/nivo/commit/2d5ebe71c9eeb8a4bbd12071815d71a60f7302c8))
  *  type errors in scale helper functions ([27d717a7](https://github.com/plouc/nivo/commit/27d717a7fbc0da391b9128926c764c7b9d1e83bc))
* **scatterplot:**  get working with scales updates ([d9e3a5bc](https://github.com/plouc/nivo/commit/d9e3a5bc4a920eb37382bb7ad2c35c10b63c7c07))
* **stream:**  get working with scales updates ([73a0812c](https://github.com/plouc/nivo/commit/73a0812c670fbd5ffb04f386aa6a14c63fdc49cd))
* **swarmplot:**
  *  pass renderWrapper prop to container ([9977858e](https://github.com/plouc/nivo/commit/9977858e28c603cc7bedfe6a597e59272a5ab4da))
  *  get tests passing ([b7aa6c73](https://github.com/plouc/nivo/commit/b7aa6c73ab452fd9b2140f53ba6961ce4c575b73))
  *  fix some type issues ([9b1f12c2](https://github.com/plouc/nivo/commit/9b1f12c2a6d9e00a7cbbee2bce55ce18779c1f2d))
  *  fix issues from rebase ([8bd6671d](https://github.com/plouc/nivo/commit/8bd6671db7d82114daa1da01a7671322e782b9d8))
  *  make it compile after TS conversion ([46ddb27c](https://github.com/plouc/nivo/commit/46ddb27c6b8ce05df7a17e35a8cb21fb1b98062d))
* **website:**  update imports from @nivo/calendar ([c7f9876e](https://github.com/plouc/nivo/commit/c7f9876eb742c06aedc276b787470f1b48c5929f))



<a name="v0.70.1"></a>
## v0.70.1 (2023-07-31)


#### Bug Fixes

* **bar:**  add getTooltipLabel to BarItemProps typings (#1550) ([a0911832](https://github.com/plouc/nivo/commit/a0911832570f01c2c9d9719d64f4606eb6bf50f4))
* **core:**  export ThemeProvider in typings (#1547) ([b820166b](https://github.com/plouc/nivo/commit/b820166b025431be95cbb45a467be92d96bcbdb5))
* **geo:**  add legends prop to typings for Choropleth (#1548) ([25270001](https://github.com/plouc/nivo/commit/2527000182aaaf9570deb31eb1526e78685d0cca))
* **legends:**  mark data and padding props as optional (#1545) ([31995708](https://github.com/plouc/nivo/commit/319957083acbd764d8fc306844687cf2f08f97a1))
* **line:**
  *  correct typing for lineGenerator prop (#1549) ([b66ac11a](https://github.com/plouc/nivo/commit/b66ac11ac80553dc4075de90b882d85dc5c0d0b6))
  *  update types from DataFormatter to ValueFormat (#1546) ([37c89e02](https://github.com/plouc/nivo/commit/37c89e0207c912ad5e21d27ee22a72b84f439ac2))
* **packages:**  remove `global` from default props (#1544) ([4eb54cad](https://github.com/plouc/nivo/commit/4eb54cad40f8772ee45bab1664d5767d2b765136))



<a name="v0.70.0"></a>
## v0.70.0 (2023-07-31)


#### Bug Fixes

* **axes:**  restore memoization (#1521) ([729cd555](https://github.com/plouc/nivo/commit/729cd55562db4e2c1e436d2d732512f0c2ed423d))
* **bar:**  pass renderWrapper prop to container ([a258e0b0](https://github.com/plouc/nivo/commit/a258e0b0cdb57d152d59004fe7dc63f0a78026e2))
* **build:**  mark @react-spring packages as external (#1537) ([7bc4fc72](https://github.com/plouc/nivo/commit/7bc4fc72c74cd92802e42595e57f942eb70cb51e))
* **colors:**  update react peer dep to be < 18.0.0 ([091dad31](https://github.com/plouc/nivo/commit/091dad31897cbf8101f6568885549d04dae7cce8))
* **core:**  avoid occasional "ResizeObserver loop" error (#1466) ([7f88e10d](https://github.com/plouc/nivo/commit/7f88e10da2b1eae178474c9f98e6d652d4a13f6e))
* **heatmap:**  return currentCellId from useHeatmap hook (#1536) ([c572f803](https://github.com/plouc/nivo/commit/c572f8035bf7e3c699685882b552b63cdd05d467))
* **marimekko:**  update react peer dep to be < 18.0.0 ([cb983901](https://github.com/plouc/nivo/commit/cb98390177a2f5310ee532ef78b7b47179c72121))
* **pie:**  pass renderWrapper prop to container ([cec89ff2](https://github.com/plouc/nivo/commit/cec89ff21408e6684301da148689fcc99485be1f))
* **swarmplot:**  fix swarmplot node onMouseMove event (#1529) ([7f998811](https://github.com/plouc/nivo/commit/7f9988114f493566727a356995705bd570143952))
* **treemap:**  adjust label type to accept a function (#1541) ([3dca0ae3](https://github.com/plouc/nivo/commit/3dca0ae36e9ef1d1ec4527a7b1e6725636968f8f))
* **website:**
  *  update link to bar race chart example (#1524) ([b323e986](https://github.com/plouc/nivo/commit/b323e9862a3796254d583f9ad6fac63f26a1268a))
  *  update circle-packing page code ([dbc0aed2](https://github.com/plouc/nivo/commit/dbc0aed25e690094b3e3008a8b163aff8cde3b79))

#### Features

* **bar:**  use custom label for legends (#1371) ([ae637f17](https://github.com/plouc/nivo/commit/ae637f1740a30ca9645346394c9168b25da71c9c))
* **bump:**  support more series than ranks (#1540) ([d07097d3](https://github.com/plouc/nivo/commit/d07097d3462dcb9940d1e80931c473b7a22bfad0))
* **examples:**  improve codesandbox example (#1523) ([bdbb48f9](https://github.com/plouc/nivo/commit/bdbb48f9fe4610b153ee42546ae141ad5942afae))
* **heatmap:**  allow label formatting (#1428) ([92d11b14](https://github.com/plouc/nivo/commit/92d11b14d186680047ada574faf5880c373863e8))
* **legends:**  migrate package to typescript (#1512) ([d9ec5fdc](https://github.com/plouc/nivo/commit/d9ec5fdc78429c8204658d8abc081e60c728b86a))
* **sunburst:**  pass child node to childColor function (#1520) ([5580e968](https://github.com/plouc/nivo/commit/5580e9689e0baede9c296af29bb3c2139927f4e3))



<a name="v0.69.1"></a>
## v0.69.1 (2023-07-31)


#### Bug Fixes

* **axes:**  fix AxisProps types to be correct (#1502) ([baad3c0e](https://github.com/plouc/nivo/commit/baad3c0e9737176d263cc2c7268882cd95509bbe))
* **line:**  update type for custom line canvas layers (#1499) ([04547846](https://github.com/plouc/nivo/commit/04547846b9a803c3d64bbec8249aef4a163ae8b2))



<a name="v0.69.0"></a>
## v0.69.0 (2023-07-31)


#### Bug Fixes

* **axes:**
  *  update some types ([b5d5f0f3](https://github.com/plouc/nivo/commit/b5d5f0f3ada72c77f9db5089f89d257629a67f78))
  *  create alias for axis value ([f11d0347](https://github.com/plouc/nivo/commit/f11d034700bf39bcfbd53ed890e2410300f10ce6))
  *  improve package types ([f7fcc751](https://github.com/plouc/nivo/commit/f7fcc75196243ba990ec0c0f5ad2f923f4cb0d65))
  *  remove undefined cursor style prop from AxisTick ([eb969df8](https://github.com/plouc/nivo/commit/eb969df88314d838720045a06ded5661f326868f))
  *  ensure document exists in the environment (#1489) ([a2e0d891](https://github.com/plouc/nivo/commit/a2e0d891219dfb7d850fe8e30b754164f163c2a1))
* **build:**  include latest changelog when publishing ([e9360be8](https://github.com/plouc/nivo/commit/e9360be8b62a947cdb4eaef333793314ad2b15bc))
* **bullet:**  remove some ts-ignore comments ([b4372cf1](https://github.com/plouc/nivo/commit/b4372cf1cead6d8d8291c10b8235fc7a04b1af06))
* **circle-packing:**
  *  add support for controlled zoomed ID ([faf00aa8](https://github.com/plouc/nivo/commit/faf00aa84cc17291573b5dc27dd1c47be6f8b587))
  *  fix HTML implementation overflow ([f83f2f1c](https://github.com/plouc/nivo/commit/f83f2f1c2769756e4351584148f200d711dd88f6))
* **deps:**  remove recompose ([53b9c1cc](https://github.com/plouc/nivo/commit/53b9c1cc7b439d550e8c2084bbd420c334082881))
* **legends:**  Add missing symbolBorderWidth to typings (#1431) ([a00ef4a1](https://github.com/plouc/nivo/commit/a00ef4a1a0e23c20a052dae4f6c6e8b6118e4101))

#### Features

* **axes:**  init migration to typescript ([73f98032](https://github.com/plouc/nivo/commit/73f98032b6faed65ea89b57ef9d5e1043c1a1acb))
* **build:**  add test watch commands to makefile ([e706d48e](https://github.com/plouc/nivo/commit/e706d48eaaaec05d0680c4c4c78562309da8fe87))
* **circle-packing:**
  *  update default childColor ([ca07b9e6](https://github.com/plouc/nivo/commit/ca07b9e601c9259eaa364e4e443f83dab25c883c))
  *  restore patterns and gradients support for the SVG implementation ([08ee5155](https://github.com/plouc/nivo/commit/08ee5155fb8227716f6135639768bd1520704760))
  *  add a dedicated prop to enable parent color inheritance ([b864de9f](https://github.com/plouc/nivo/commit/b864de9f2d90df8d23e9a1a7342b3d6bd06ad26c))
  *  update website descriptions ([b91c0570](https://github.com/plouc/nivo/commit/b91c0570e68397ad3ca66251ef1b118603be84b4))
  *  update stories ([9b7a3046](https://github.com/plouc/nivo/commit/9b7a304686c1a3958bc13f1104808c1423e00769))
  *  restore border support ([2911b61c](https://github.com/plouc/nivo/commit/2911b61c46a0097c0190630e7333be3be33ab269))
  *  restore pixelRatio property for canvas implementation ([56491038](https://github.com/plouc/nivo/commit/56491038b26250265f46a13fb5451f2a4c840b05))
  *  add colorBy property to control which property should be used to assign a color ([10914684](https://github.com/plouc/nivo/commit/10914684f9f73057f2b72f844f7fbf8bdebc9f80))
  *  add mouse handlers support to canvas implementation ([82cb7c55](https://github.com/plouc/nivo/commit/82cb7c55c07690c41c0787a67dfae90116bf49c3))
  *  add zoom support ([d8c7a883](https://github.com/plouc/nivo/commit/d8c7a883f9dbeca7c9c2b807d6ab471a53a4276c))
  *  expose hooks to be able to build fully custom charts ([03433b02](https://github.com/plouc/nivo/commit/03433b02cee275499ec7cb03a9b4b45070c71cff))
  *  add support for custom circle component to SVG and HTML implementations ([6f8a4caf](https://github.com/plouc/nivo/commit/6f8a4caf8dd42467d4096520ea7a924c6cfc83d8))
  *  memoize labels transition phases ([d9170572](https://github.com/plouc/nivo/commit/d9170572150330632747b2ce3ce6ca50e15a0444))
  *  add support for mouse handlers to SVG and HTML implementations ([138eafb5](https://github.com/plouc/nivo/commit/138eafb544f6307d41a5f58a9dca2b925c5ffb64))
  *  restore labels ([4fb658dc](https://github.com/plouc/nivo/commit/4fb658dc92812449de8ab14a354049ed50a0fb6f))
  *  restore leavesOnly support ([07135815](https://github.com/plouc/nivo/commit/07135815e10cbf89c03db58605713bdfc1345672))
  *  migrate canvas implementation to new architecture ([478da0ee](https://github.com/plouc/nivo/commit/478da0eeab6f4418f6cbb40a43d28a2dcb587c0f))
  *  rename Bubble to CirclePacking ([43bb075c](https://github.com/plouc/nivo/commit/43bb075ca1af316627f400e28edf937fbbb18a3c))
  *  init hooks ([6fb27f70](https://github.com/plouc/nivo/commit/6fb27f702b05452631f8d0419c5ec3d8e365d3f2))
  *  remove licence headers ([1f5290a7](https://github.com/plouc/nivo/commit/1f5290a756b417b17d9e0ef19c43e045ef3951a6))
  *  enable TS support ([e75f1c89](https://github.com/plouc/nivo/commit/e75f1c89574cd46224adcfdb6ef259628e831e97))
* **d3-scale:**  upgrade d3-scale package ([c976d663](https://github.com/plouc/nivo/commit/c976d6637d318c51e56420ae7b80f7e9ea1e4b66))
* **deps:**  replace `recompose` with inlined version (#1494) ([09b02069](https://github.com/plouc/nivo/commit/09b0206968aa5242e3151229413b7b76e34c1605))
* **generators:**  migrate package to typescript (#1492) ([46d2ae0c](https://github.com/plouc/nivo/commit/46d2ae0c4fe5af3bf642fbd3e0d0f3534ab6e563))
* **voronoi:**
  *  fix storybook ([97b7fc85](https://github.com/plouc/nivo/commit/97b7fc85ebf9c1e58d4f918e7c7088c352036fdb))
  *  migrate package to TypeScript and remove recompose ([9796f3f0](https://github.com/plouc/nivo/commit/9796f3f04936a03c78b302060a6067512c7df84e))
  *  remove license headers ([f69c7992](https://github.com/plouc/nivo/commit/f69c7992106ddd7f066584e2fe53b64aaff7e4b2))
  *  init TypeScript setup ([74621c0f](https://github.com/plouc/nivo/commit/74621c0f0531dbc4715eb302ced69e5420dde3af))



<a name="v0.68.0"></a>
## v0.68.0 (2023-07-31)


#### Bug Fixes

* **arcs:**  fix packages version due to new release ([c1ddb3d0](https://github.com/plouc/nivo/commit/c1ddb3d01ca7ba91430e59a747c2d9bb0724a036))
* **axes:**  rtl issue with x-axis (#1349) ([95f3b343](https://github.com/plouc/nivo/commit/95f3b3433971cdd037e3dba7031600d07eec27b7))
* **axis:**  time series rendering (#1408) ([d80dafd6](https://github.com/plouc/nivo/commit/d80dafd6f730feedcf940db4624506d4d21d8d5f))
* **bar:**
  *  types don't allow bar component as any svg element (#1469) ([20697e57](https://github.com/plouc/nivo/commit/20697e574aae13106993f9dcf8067d7d34903004))
  *  improve grouped bar performance (#1404) ([f37d066e](https://github.com/plouc/nivo/commit/f37d066e626e6a93aee6714dfd160626a267c9c7))
* **core:**
  *  fix invalid core types (#1386) ([296f5d1c](https://github.com/plouc/nivo/commit/296f5d1cff478309c18186b1bf61a7f4397f9c91))
  *  add missing marker typings (#1440) ([ff2cc31d](https://github.com/plouc/nivo/commit/ff2cc31d71371752f05d149817e0d366c2ac3e47))
  *  fix type definition of PatternSquaresDef (#1355) ([bf27d55d](https://github.com/plouc/nivo/commit/bf27d55ddac7f5046bae1f9e545aa9e44346692d))
* **deps:**  upgrade react-spring to v9.1.2 (#1480) ([1d94b5f1](https://github.com/plouc/nivo/commit/1d94b5f12551be001d41cc3ec7da585ff37f301d))
* **doc:**  fix grammar errors in docs/comments ([b5bbeda7](https://github.com/plouc/nivo/commit/b5bbeda73c498705a7e8f106aa54aa44628eaaec))
* **funnel:**  fix dependencies on other nivo packages (#1486) ([a1a12411](https://github.com/plouc/nivo/commit/a1a1241100cdef56f2e3282d6b22bd12533ea52f))
* **pie:**
  *  fix pie stories ([4c8cde1e](https://github.com/plouc/nivo/commit/4c8cde1eacc90db4d8244d0f451794b7dc55decb))
  *  fix existing tests due to usage of @nivo/arcs ([6d5fb272](https://github.com/plouc/nivo/commit/6d5fb2721235f6bdf301705f94206231db7e46d7))
  *  fix skip angle for slice labels ([70c1ef24](https://github.com/plouc/nivo/commit/70c1ef24f15aaa4953d119fb8619cfa9c94bd233))
* **tooltip:**  Add anchor param to showTooltipFromEvent type (#1420) ([1c2569e4](https://github.com/plouc/nivo/commit/1c2569e42de048a06b61e4db89bcb960431f5044))
* **voronoi:**
  *  length undefined in production (#1441) ([80a9c376](https://github.com/plouc/nivo/commit/80a9c376bdbc1836c79c1981abf36e16b82ba4fe))
  *  fix typo in export class name (#1436) ([245b0cd4](https://github.com/plouc/nivo/commit/245b0cd4d39626368b6b6353402df874a87fe0a8))
* **website:**  fix typo in pie props (#1380) ([ce7c755b](https://github.com/plouc/nivo/commit/ce7c755b23cfc55ead9bac9920a55ef6e764bd99))

#### Features

* **arcs:**
  *  fix typo in useArcLinkLabelsTransition comment ([62766378](https://github.com/plouc/nivo/commit/627663785a247ab27d6fb128b721314d23138cab))
  *  improve label accessor in ArcLinkLabelsProps ([3aa12a3b](https://github.com/plouc/nivo/commit/3aa12a3b8894fd76e8501bf2c7b3c3e46c149e8c))
  *  finalize arc link labels ([89c52e60](https://github.com/plouc/nivo/commit/89c52e60db0ecc7b157e2f266b1049e2c4ad4596))
  *  move canvas helpers to scoped directories ([f0d9d19c](https://github.com/plouc/nivo/commit/f0d9d19cb966e7181a1848fc4cca0f6d39af80b0))
  *  improve labels handling ([c1bfd514](https://github.com/plouc/nivo/commit/c1bfd5143fc0878187d8d3a57891b3df67ebbd3f))
  *  add the ability to pass custom arc label/arc link label components ([8fb574c9](https://github.com/plouc/nivo/commit/8fb574c9413ca509405a4cee456e2beef631d9f8))
  *  provide generic arc labels/arc link labels layer ([547b6352](https://github.com/plouc/nivo/commit/547b63524776a23f08857a6e87a9d6241be772db))
  *  normalize arc labels props ([08b75bff](https://github.com/plouc/nivo/commit/08b75bff02aab866d89cc159be6e511f72926c02))
  *  fix arc border width ([f2223d77](https://github.com/plouc/nivo/commit/f2223d776125b8fad6cbe0060b0e0e5970ad6010))
  *  move arc hover detection from core to arcs package ([30be4925](https://github.com/plouc/nivo/commit/30be4925ca124b80f60df28d80a5602abc9b9c1b))
  *  add configurable transition modes ([e76747d7](https://github.com/plouc/nivo/commit/e76747d799d84331f79c097ea22e1645579a2bff))
  *  introduce @nivo/arcs package ([afc6b8cc](https://github.com/plouc/nivo/commit/afc6b8cc6ac0d9a6b9957fe0038481cd3c383a21))
* **chord:**  use arc hover detection from @nivo/arcs ([3eece0ad](https://github.com/plouc/nivo/commit/3eece0adf73927b6b0ca4b837c31da7373155432))
* **core:**
  *  improve property accessor utilities ([90958bdc](https://github.com/plouc/nivo/commit/90958bdc3296075af571977c65c7eb878566918f))
  *  remove ts-ignore directive from useValueFormatter imports ([640393ba](https://github.com/plouc/nivo/commit/640393ba0050127427bc2d84cafe396cd81712f9))
  *  improve value formatter typings ([5b158797](https://github.com/plouc/nivo/commit/5b158797da79430260c1e75165dd1c0cd15264e1))
  *  remove license headers from hook modules ([09e3f839](https://github.com/plouc/nivo/commit/09e3f8393da73f49676b22587805ac113a6900a9))
  *  remove license headers from lib modules ([e4eb8f72](https://github.com/plouc/nivo/commit/e4eb8f7282759aa4fb4efd6c2109e17d60357580))
  *  remove license headers from props utilities ([b05913d1](https://github.com/plouc/nivo/commit/b05913d1bb559539f44356347ecf7d9ffe947bf6))
  *  move arc bounding box unit tests to the arcs package ([6c30f05a](https://github.com/plouc/nivo/commit/6c30f05ae3b5ce2f9a6a28fe260464612502a7d2))
* **legends:**  remove recompose from dependencies ([29e7531c](https://github.com/plouc/nivo/commit/29e7531cbe67ccf334ced15798c5397a8e4c7a63))
* **line:**  use theme values for line slice tooltip (#1471) ([0f67123f](https://github.com/plouc/nivo/commit/0f67123f7d9ac254884a62d957c0b8b3cd698bfe))
* **linting:**  add lint --fix option and create new make option (#1484) ([dd74cbb3](https://github.com/plouc/nivo/commit/dd74cbb3e5fa3684fe2ea2b33f6a866872b0b293))
* **pie:**
  *  remove lodash ([fe4f6342](https://github.com/plouc/nivo/commit/fe4f63422da855064829cd5f3ad506d585dfc082))
  *  add story to showcase custom arc label component ([37cb3d15](https://github.com/plouc/nivo/commit/37cb3d15e44caf8c3322c50d9303eb556cd64cb2))
  *  adjust stories according to refactoring ([4ca47ac6](https://github.com/plouc/nivo/commit/4ca47ac67f2d938bb8d8198b4d3aa53127d29736))
  *  rename slices to arcs ([39f06445](https://github.com/plouc/nivo/commit/39f064451b195c4d228dced39698dadfd0612034))
  *  fix typings for arc mouse handlers ([4d3d303f](https://github.com/plouc/nivo/commit/4d3d303f31a5f707aab5614d6962e6c5eae1de43))
  *  use generic ArcsLayer from the arcs package ([b14ffcd3](https://github.com/plouc/nivo/commit/b14ffcd32935b9c2d75ad3a6501cdc736abab438))
  *  compute radial lables in arcs package ([15625766](https://github.com/plouc/nivo/commit/156257668b51b08696a27a98d286557d8b3dfc16))
  *  use mostly the arc package for PieCanvas ([46af372a](https://github.com/plouc/nivo/commit/46af372abd5e014d31484df635ab198fec5696f4))
  *  use @nivo/arcs to compute PieCanvas slice labels ([ce6bb875](https://github.com/plouc/nivo/commit/ce6bb87596d093ac24a6995cf20508af8795fba0))
  *  use Container instead of withContainer HOC ([0fb7756b](https://github.com/plouc/nivo/commit/0fb7756b585f3c47ec91c91c5105c5f968aee4bc))
  *  fix angle padding ([3baba4c6](https://github.com/plouc/nivo/commit/3baba4c64f05816e1ec25e981a1d118773eae47b))
  *  add radius offsets support for active arcs ([cfc0cb63](https://github.com/plouc/nivo/commit/cfc0cb6390c3059fb81d35938ae40387768cde42))
  *  improve transitions and fix slice labels ([9365ae27](https://github.com/plouc/nivo/commit/9365ae27d0664a694775f2cf6637757f3180240b))
  *  restore feature parity for slices ([5dbbe0cd](https://github.com/plouc/nivo/commit/5dbbe0cdff6b7ffb97193e7162cc600f29422a6f))
  *  add transitions for arcs ([ccb1656d](https://github.com/plouc/nivo/commit/ccb1656dda852b1d282480e703224d9e4b2fb0d8))
* **scales:**
  *  add nice argument to linear and time scales (#1473) ([644faf46](https://github.com/plouc/nivo/commit/644faf46b9ed12d7bb0c7fad9f24e64eef8fafce))
  *  add option to clamp linear scales (#1342) ([b5584de6](https://github.com/plouc/nivo/commit/b5584de60a2eab707f6cefe7be55bda4dbf72926))
* **sunburst:**
  *  improve drill down demo ([b058f7b7](https://github.com/plouc/nivo/commit/b058f7b7a9750ce923e59b03bd6413391d6fa72f))
  *  improve color management ([c94aff4c](https://github.com/plouc/nivo/commit/c94aff4c98ec8483643d51bd2fa4b806a5f16c9e))
  *  explain non-null assertions and remove linter warnings for those ([378c52d9](https://github.com/plouc/nivo/commit/378c52d96222bb963d1e92eb0dc883f69736771b))
  *  improve props documentation ([d6386d9b](https://github.com/plouc/nivo/commit/d6386d9bb97dae15c62535c3edc28aedaf6732a9))
  *  simplify types ([a6b5b926](https://github.com/plouc/nivo/commit/a6b5b92695630ffc3519cb249c36720034965d03))
  *  also apply defaults to main hook ([beee8941](https://github.com/plouc/nivo/commit/beee89410dc9bdb39e4f62d97024f6c40ea53912))
  *  remove unused types ([836823ec](https://github.com/plouc/nivo/commit/836823ecb6bd2a9c8a32718891d370b3adbc7aea))
  *  fix typo ([e059e80d](https://github.com/plouc/nivo/commit/e059e80dd0b370a875dbbe732abe6644618700a8))
  *  use arcs package ([bf225e7a](https://github.com/plouc/nivo/commit/bf225e7a475748cf1b972b27f8f3ec8afae65bec))
* **testing:**  add enzyme types ([d66d4e92](https://github.com/plouc/nivo/commit/d66d4e92348b62e5929db943bfd1b2809672c6d7))
* **website:**  update references ([5b2deb56](https://github.com/plouc/nivo/commit/5b2deb56f69c80ed2c2ad6104f39d9dfb47f5934))



<a name="v0.67.0"></a>
## v0.67.0 (2023-07-31)


#### Features

* **bar:**  typescript - uses string unions to define BarLayerType (#1322) ([a1e08f57](https://github.com/plouc/nivo/commit/a1e08f57d3c69e4f4fd2d0b9c8c4976739ef00cd))
* **sunburst:**
  *  add layers support ([3a6537b0](https://github.com/plouc/nivo/commit/3a6537b011955ad70a4e1bcdaff8ac0afc1cf0de))
  *  add tests ([66edc5a4](https://github.com/plouc/nivo/commit/66edc5a48d2a5dac57194979a36d8c8f15cd69be))
  *  add valueFormat prop and move event handlers to hook ([c4273501](https://github.com/plouc/nivo/commit/c4273501871e5f662e69ba15d7e88d39557132f2))
  *  add parent to node data ([c586676b](https://github.com/plouc/nivo/commit/c586676b254ef8e8de29ceb7cec0c203dae78c0c))
  *  add animation support ([9b4630a9](https://github.com/plouc/nivo/commit/9b4630a90a829d669ad73f7e23315ce44833ec81))
  *  add pattern and gradient support ([1fecdffe](https://github.com/plouc/nivo/commit/1fecdffeedfae5d24c3544ed5badb6fb33601301))
  *  remove recompose ([3c0586b3](https://github.com/plouc/nivo/commit/3c0586b3c6a4a4f0229746635d13f957122fd7d2))
  *  init package migration to typescript ([0542c6ce](https://github.com/plouc/nivo/commit/0542c6ce91df618bd2c5f48443052b1edcc6ecbe))

#### Bug Fixes

* **area-bump:**  Return a new serie reference when color or styles change ([844c311f](https://github.com/plouc/nivo/commit/844c311f66884f7e855a9e57de7421c3ec91a6de), closes [#1301](https://github.com/plouc/nivo/issues/1301))
* **bump:**  Return a new serie reference when color or styles change ([07c8ba10](https://github.com/plouc/nivo/commit/07c8ba102fd6f3a846a46ea86f46b386eeb10692))
* **generators:**  change duplicate keys in tree data ([149d1a64](https://github.com/plouc/nivo/commit/149d1a6491580ff7cc3eba21108f6411a0c4ea35))
* **pie:**  fix types related to d3-shape ([624d5859](https://github.com/plouc/nivo/commit/624d5859e46a678ef7db3ddf5350a93f639124e2))
* **sunburst:**
  *  fix logic with radius and centerX/Y ([ee593828](https://github.com/plouc/nivo/commit/ee593828d34ece6191da29051c9a4ded5cf1e176))
  *  get build passing again ([77fcc219](https://github.com/plouc/nivo/commit/77fcc219a195c5f4c9c0fc2e69d51ba5daae5c44))
  *  fix with child color modifier story ([96ac069f](https://github.com/plouc/nivo/commit/96ac069fb14b7a2488fdc8d98eb6379056b9103a))
* **website:**  update sunburst to not crash on hover ([952ad507](https://github.com/plouc/nivo/commit/952ad5075b478d3dace43086073b7d5a270bbba5))



<a name="v0.66.0"></a>
## v0.66.0 (2023-07-31)


#### Bug Fixes

* **bar:**  fix stacked bars when key is missing (#1291) ([484235ff](https://github.com/plouc/nivo/commit/484235ff44bf3cb516e906f8c2b101669b17fc8a))
* **changelog:**  update clog to allow setting a tag date (#1278) ([e984d72b](https://github.com/plouc/nivo/commit/e984d72beab35644a437d87ce7d2d6f8811eef10))
* **core:**  add missing properties back to theme type (#1292) ([681e0c28](https://github.com/plouc/nivo/commit/681e0c28fcf8ef593a8d5bc71b7b3256342982ac))

#### Features

* **bar:**  add the ability to round index scale (#1282) ([1ab12579](https://github.com/plouc/nivo/commit/1ab12579594baa2eb2c89e65c6bdf81a0e85cfd0))



<a name="v0.65.1"></a>
## v0.65.1 (2023-07-31)




<a name="v0.65.0"></a>
## v0.65.0 (2023-07-31)


#### Bug Fixes

* **BarCanvas:**  stories demonstrating the canvas ref ([96cff43e](https://github.com/plouc/nivo/commit/96cff43e69bbf77a47959b51a4d4693e5d4e032a))
* **bar:**
  *  add new prop valueScale to BarCanvas (#1274) ([d66acd6a](https://github.com/plouc/nivo/commit/d66acd6ad130b6ada3aeff493c85d878581ab727))
  *  fix lint errors ([640c883b](https://github.com/plouc/nivo/commit/640c883be1a51834ea6abb087f8e727c22f15ade))
  *  prevent missing values causing bad scales (#1257) ([b9687754](https://github.com/plouc/nivo/commit/b96877547f504ba6249bc0df4bd92ddf29f7992c))
* **bullet:**
  *  make dimensions required props ([8451c279](https://github.com/plouc/nivo/commit/8451c279099d3931afc35950ae52aa22b84ee7f6))
  *  fix linting errors round 3 ([a5eac4a9](https://github.com/plouc/nivo/commit/a5eac4a910601678522148c95fcec58e1264a8ce))
  *  fix linting errors round 2 ([c446b46c](https://github.com/plouc/nivo/commit/c446b46cb98bdcff19d299b9e3fbc9a0363067ed))
  *  fix linting errors ([3df88ed5](https://github.com/plouc/nivo/commit/3df88ed5db3bb8556116b9ccdec6df22bbf7d115))
  *  fix website paths ([8dd28feb](https://github.com/plouc/nivo/commit/8dd28febc9618275e019d95cac9f57ac7c4ea838))
  *  fix tslint errors ([b6f67018](https://github.com/plouc/nivo/commit/b6f6701849ab8aecf2f6e82a84a592ede9b1a322))
* **core:**  add useDimensions hook to types ([4ce35386](https://github.com/plouc/nivo/commit/4ce35386d16dc1a7d3a088a5246d5fbd7ab75c48))
* **funnel:**  fix lint errors ([e66b51c5](https://github.com/plouc/nivo/commit/e66b51c531e02bea99d24e058b756ab7ee164211))
* **geo:**  fix lint errors ([bc398839](https://github.com/plouc/nivo/commit/bc398839d75ceccef6652e74d11a949e28be101d))
* **legends:**  fix lint errors ([275b2b55](https://github.com/plouc/nivo/commit/275b2b557008ef3d7409ce32fa21758afd7253e0))
* **line:**
  *  add a stories for the responsive canvas component ([0fe9c9d3](https://github.com/plouc/nivo/commit/0fe9c9d305541890132cf203e1260719ca8c733e))
  *  add a story showcasing the usage of the ref in canvas ([190acd7e](https://github.com/plouc/nivo/commit/190acd7e9487f388aaaeddcd156a87e971a6306d))
* **motion:**  replace deprecated  method with the new  helper ([57b27d8d](https://github.com/plouc/nivo/commit/57b27d8d0052372a8102ce48424aefd5641b0862))
* **packages:**  allow react 17 in peer dependencies ([a4f370b4](https://github.com/plouc/nivo/commit/a4f370b464b452038e3a68ed75dc475c5ed69f18))
* **pie:**
  *  fix typings issues due to better d3 types ([ad9cc2c6](https://github.com/plouc/nivo/commit/ad9cc2c61df170532f6b9d93f1428b73390a611f))
  *  make dimensions required props ([d502a409](https://github.com/plouc/nivo/commit/d502a40982894025e5d2e2a626b2efe92923dd8c))
  *  fix incomplete type for valueFormat ([0793553e](https://github.com/plouc/nivo/commit/0793553e73254db70586de093efc5c898f21548b))
* **storybook:**  move bar/race chart story to main bar stories (#1258) ([e9c5932d](https://github.com/plouc/nivo/commit/e9c5932d92f933259f15b73048f750dd220b44ce))
* **sunburst:**  apply my own fixes from pr review ([cbb9e37a](https://github.com/plouc/nivo/commit/cbb9e37acbcdf82cb72af78c8afccd23254ca050))
* **tooltip:**
  *  fix typings due to core adjustments ([87e5edb2](https://github.com/plouc/nivo/commit/87e5edb2588fbcfecd245a1bb28775e356350b18))
  *  export useTooltip hook in types ([7eb1b30b](https://github.com/plouc/nivo/commit/7eb1b30b6210620d83c51b8e81692acafa4ecb13))
* **website:**
  *  patch react-spring due to known issue with Gatsby ([c35b4e96](https://github.com/plouc/nivo/commit/c35b4e96c6f7103f3400ff02fc2b423eb741081b))
  *  changes to get deployment to work ([09f46839](https://github.com/plouc/nivo/commit/09f468393643580bb6d2c2fdb35c01d737109a4b))

#### Features

* **BarCanvas:**
  *  allow to use ref to access the underlying canvas ([fb91ca4e](https://github.com/plouc/nivo/commit/fb91ca4e0cb4d53754fa75bf2f0a2825b78b4129))
  *  add a ref to access the canvas ([ce5b67a1](https://github.com/plouc/nivo/commit/ce5b67a10a42bf8b1be9735ec1823cfaf75d1e7b))
* **axes:**  adjustments for react-spring@next ([46dbb5a4](https://github.com/plouc/nivo/commit/46dbb5a45de31674bab92efe89dd576ac1aafbf8))
* **bar:**  add BarItem component to the exposed package API (#1261) ([df211c03](https://github.com/plouc/nivo/commit/df211c036c50a285f40eb81609f3840a286424dc))
* **bullet:**
  *  adjustments for react-spring@next ([c567ae18](https://github.com/plouc/nivo/commit/c567ae18f97ed0349105f6a55a82f655af6465c5))
  *  convert stories to typescript ([b2894a91](https://github.com/plouc/nivo/commit/b2894a91272f18e86801927947647e323e7893c5))
  *  switch from react-motion to react-spring ([04f07093](https://github.com/plouc/nivo/commit/04f0709341c1c7371722bb110dc9eb275b416120))
  *  convert to functional components ([3f63fd99](https://github.com/plouc/nivo/commit/3f63fd99fdca967f1046f3c7acce10d98306da07))
  *  remove recompose dependency ([ff7f1bc8](https://github.com/plouc/nivo/commit/ff7f1bc86aba13937f4475524976c80319d16427))
  *  init package migration to typescript ([d07378a3](https://github.com/plouc/nivo/commit/d07378a349631728bf14a3df2ff1ac74b64442aa))
* **colors:**
  *  update package typings according to TypeScript migration ([e98d8e07](https://github.com/plouc/nivo/commit/e98d8e071ae474526621761ba03d608d9a2971ec))
  *  migrate ordinalColorScale to TypeScript ([7bb42c68](https://github.com/plouc/nivo/commit/7bb42c688c718c68d5d734dbf401156cc04da496))
  *  migrate prop types to TypeScript ([6bf1f7d4](https://github.com/plouc/nivo/commit/6bf1f7d429a182776bed2d64778eebeb4f25dd20))
  *  rename InheritedColorProp to InheritedColor in all package typings ([29a73083](https://github.com/plouc/nivo/commit/29a73083447fec20d397f9dafc8a29694b516f73))
  *  migrate inheritedColor to TypeScript ([436117da](https://github.com/plouc/nivo/commit/436117dae71499a3db6db1129462a74bed4f7ac1))
  *  migrate motion to TypeScript ([e1785918](https://github.com/plouc/nivo/commit/e1785918de1eb57af7ca755ce3c3f1fb9b42d562))
  *  add typings for color schemes and interpolators ([1093da12](https://github.com/plouc/nivo/commit/1093da12ac0ec2e11b455d823f0749dc1a5277f6))
  *  init TypeScript migration ([2383b4d5](https://github.com/plouc/nivo/commit/2383b4d5c88b7e3b64deb66859b134faefa6cf7e))
* **core:**
  *  add proper type for useTheme hook ([66d2f4f0](https://github.com/plouc/nivo/commit/66d2f4f09b2d9a47258779ebb199e8741a0e1658))
  *  add missing spring config to Container ([25aa18fb](https://github.com/plouc/nivo/commit/25aa18fbdd0a8b5a97d31fac425b61bc57f401b2))
* **line:**  forward ref to the canvas element ([4be9c8ab](https://github.com/plouc/nivo/commit/4be9c8ab2e7e8315dccce28673ca52afd9e8a199))
* **marimekko:**
  *  fix doc typos and add missing custom layer props to the doc ([ae4c329c](https://github.com/plouc/nivo/commit/ae4c329cc59c3f0a74cd4ace886762e7e96d0305))
  *  update README preview ([ca4a0d66](https://github.com/plouc/nivo/commit/ca4a0d6628b36a104c22dd5a23d1d606c6cfb423))
  *  add support for legends ([f39f12a7](https://github.com/plouc/nivo/commit/f39f12a700ed37131650ff16c61b794f5a484628))
  *  add story about custom layers ([8560b6ad](https://github.com/plouc/nivo/commit/8560b6ad2acce4856074a28ecf61aa34580dbb9d))
  *  add support for value formatter ([c5429db2](https://github.com/plouc/nivo/commit/c5429db2761103a086a4c078f684d8ff910494a8))
  *  add icons and preview for README ([71b06a84](https://github.com/plouc/nivo/commit/71b06a84360750479127e94f4b8ecbb2a5de1120))
  *  add bar groups position and dimensions to layers context ([8ba4c018](https://github.com/plouc/nivo/commit/8ba4c018e0c16c99cd5649f267771386fe184957))
  *  add support for patterns and gradients ([d75a3952](https://github.com/plouc/nivo/commit/d75a3952b351778fff831e30393f13317a85e599))
  *  fix vertical layout and diverging offset ([604b523f](https://github.com/plouc/nivo/commit/604b523f7240332b5e713ddbf8545ef46cc51525))
  *  add support for axes and grid ([8e4cd0d6](https://github.com/plouc/nivo/commit/8e4cd0d659c79485aadd688d3947458959e4363f))
  *  add support for custom tooltip ([ed74e9f1](https://github.com/plouc/nivo/commit/ed74e9f11aee80f001450e33ccedfd6de94ab08f))
  *  expose thickness and dimensions scale ([914f1857](https://github.com/plouc/nivo/commit/914f1857c19f56a3e3e732f050ea1e25525175e2))
  *  add the ability to configure the stack offset ([a8437cca](https://github.com/plouc/nivo/commit/a8437ccab00f25192a46e262b384687059fb0afc))
  *  add stories ([6b6aa949](https://github.com/plouc/nivo/commit/6b6aa949c1fc72cd38c71fca424b9e70765300e4))
  *  pass default props to InnerMarimekko ([bb85398f](https://github.com/plouc/nivo/commit/bb85398f70f1192ae40664754a954f68c7787628))
  *  improve motion configuration ([7df05809](https://github.com/plouc/nivo/commit/7df05809689bb95b5ec1b82aa41dfb841e6a1497))
  *  add support for mouse handlers ([4f244ea3](https://github.com/plouc/nivo/commit/4f244ea346b87dfd9e10e0051287dab98248878a))
  *  improve documentation about data props ([3178ce81](https://github.com/plouc/nivo/commit/3178ce81f70371f1c18f5bbd9dc806c810aa7699))
  *  compute bars from top level component and pass them to custom layers ([146a04b2](https://github.com/plouc/nivo/commit/146a04b219a24afcd3b9749a04bf3d41a9aeb427))
  *  use react-spring@next and add animation support to bars ([001b6719](https://github.com/plouc/nivo/commit/001b6719072fd47b480a87f1575d7009d003e0f6))
  *  add to website and improve bars ([5f18b057](https://github.com/plouc/nivo/commit/5f18b057fb46d9cd2305f2b56187d58e46a5dd25))
  *  init package ([35556143](https://github.com/plouc/nivo/commit/35556143d9d786f7ede30ba0698cb3a77fa57d44))
* **parallel-coordinates:**  adjustments for react-spring@next ([df7d665c](https://github.com/plouc/nivo/commit/df7d665c232249028ba96116eb78838d4fe429cb))
* **scales:**  exclude null and undefined values in log scale validation (#1099) ([c87eba7d](https://github.com/plouc/nivo/commit/c87eba7d6e7539bc5de1a864d116191f852b9471))
* **sunburst:**  add mouse events and some labels (#880) ([1b3dd8f0](https://github.com/plouc/nivo/commit/1b3dd8f0844cad8d41bd0f46c41469ee0c73537b))
* **tooltip:**
  *  add a display name to memoized components to ease testing ([218e237f](https://github.com/plouc/nivo/commit/218e237f1db2329ad59f37f75926973b6538a713))
  *  migrate TableTooltip component to TypeScript ([0a54e62f](https://github.com/plouc/nivo/commit/0a54e62fc87bcaaeaa3342fe13056ed778050562))
  *  migrate Crosshair component to TypeScript ([1416e8cf](https://github.com/plouc/nivo/commit/1416e8cfb070fa3c038aaa5379b6e18ffe5ad1c1))
  *  ensure we only render the tooltip when the charts are interactive ([6623000f](https://github.com/plouc/nivo/commit/6623000f54d1f97e8cf0df8303129703084d4ffa))
  *  remove usage of tooltip prop types from other packages ([8addc8d4](https://github.com/plouc/nivo/commit/8addc8d4ec48d838ce871e78214e89c515d7fed7))
  *  adapt BasicTooltip for new typings ([cb87d9a4](https://github.com/plouc/nivo/commit/cb87d9a4e06b9e8cacf8387aa0f43f691aa3a88e))
  *  remove prop types ([b187c618](https://github.com/plouc/nivo/commit/b187c6186e22e12679889dcd5e7afd46469dae8f))
  *  init TypeScript migration ([3413142d](https://github.com/plouc/nivo/commit/3413142d056830bffef4f39e8550020928098b3b))
* **treemap:**  adjustments for react-spring@next ([e5611c30](https://github.com/plouc/nivo/commit/e5611c3064908713f811ffc0ff4e5bb4483244bb))



<a name="v0.64.0"></a>
## v0.64.0 (2023-07-31)


#### Bug Fixes

* **bar:**  include bars with zero height/width ([32f48235](https://github.com/plouc/nivo/commit/32f482354b02e6294da8f918f9773025b4120cac))
* **bump:**  add missing @nivo/axes module to dependencies ([d79d0a18](https://github.com/plouc/nivo/commit/d79d0a189803d28f0c17a4a3ddb2eaf90e0ca74b))
* **deps:**  fix @nivo peer dependency versions ([505a7c08](https://github.com/plouc/nivo/commit/505a7c08566eacc481dfd0dafe80d50cf8ac7960))
* **pie:**  fix path to typings ([243613d3](https://github.com/plouc/nivo/commit/243613d396b69f2c5a78e1ba3d53386f4e6b9297))
* **radar:**
  *  typing for custom functions (#1089) ([20a5c124](https://github.com/plouc/nivo/commit/20a5c124ea81a9842a2605a0daa27247a423579f))
  *  fix issue with points being outside circular grid (#1189) ([beb3ac84](https://github.com/plouc/nivo/commit/beb3ac8440a31288eacec329e0ad82aab7f6fb0d))
* **theme:**  remove default fill for legends.text theme (#1181) ([2216f129](https://github.com/plouc/nivo/commit/2216f129da1104076485a6b89539ed7e0ea7cbe6))
* **tooltip:**  Show tooltip on first tap for touch devices (#1185) ([f712cfaa](https://github.com/plouc/nivo/commit/f712cfaa1b75917784506989949a2483f652cd8b))
* **website:**  fix crash caused by calendar tooltip (#1214) ([7eb69175](https://github.com/plouc/nivo/commit/7eb69175f10855cc433ec7d75faa33a43baee3a5))

#### Features

* **bar:**  add ability to set scale config via `valueScale` prop (#1183) ([bea61cd9](https://github.com/plouc/nivo/commit/bea61cd9b5f0e8dfc37ce2d776c592e0a3bebdfd))
* **build:**
  *  prevent types removal when building a package ([f0c6ca8f](https://github.com/plouc/nivo/commit/f0c6ca8ff5e3d5cc95640b8f28ff9671ba35a607))
  *  generate package types during build if tsconfig exists ([e50cc92a](https://github.com/plouc/nivo/commit/e50cc92aa610f7baa7b1021e98da58c81338d600))
  *  remove types generation from package build target ([95bec3c2](https://github.com/plouc/nivo/commit/95bec3c2d48a87c86ecd6b44820ecae375972ac8))
  *  include types generation in build make target ([39da664b](https://github.com/plouc/nivo/commit/39da664b12618dc46fc8f36490a91bd3960a86e1))
  *  update build tools ([d481cfe5](https://github.com/plouc/nivo/commit/d481cfe53f2a567496f8d33ae38ea08fffb11de2))
  *  add build config for optional typescript support ([6990e3f7](https://github.com/plouc/nivo/commit/6990e3f7fdcc68f4c6a03ded3100ad2cbfb9168f))
  *  add size and bundle stats rollup plugins ([c629c81f](https://github.com/plouc/nivo/commit/c629c81ff07416c53e54c1349843e0ae539d44ea))
* **ci:**
  *  fix example sandbox formatting ([7f698ade](https://github.com/plouc/nivo/commit/7f698adec9dba77988bbe83e360865cfc46744f9))
  *  rename example sandbox ([1df58b6d](https://github.com/plouc/nivo/commit/1df58b6dfa2f508750ecdba76b7b3e7b3ab28658))
  *  add example sandbox with all nivo packages pre-installed ([9007093f](https://github.com/plouc/nivo/commit/9007093fa8852078edecba02d4c8feabe46e51f3))
  *  update sandboxes for codesandbox-ci ([3932a099](https://github.com/plouc/nivo/commit/3932a099bcde55a8fff385d12a91976690fe5828))
  *  enable codesandbox-ci ([98257ff5](https://github.com/plouc/nivo/commit/98257ff59aab0839088859a11f8fa0a6c134ce07))
* **example:**  update retro example ([54c7af5c](https://github.com/plouc/nivo/commit/54c7af5cc4f8a7c1588875aea046ce3b7559c16c))
* **fmt:**  add missing tsx extension when checking formatting ([bd08b37e](https://github.com/plouc/nivo/commit/bd08b37e2d56014f29f7b9ffcbf90a1c414df017))
* **infrastructure:**  add stale bot config ([87a56e41](https://github.com/plouc/nivo/commit/87a56e41729fd5bb15d9553ababc56ce4db63214))
* **pie:**
  *  use nullish operator to extract datum label ([525fb5a8](https://github.com/plouc/nivo/commit/525fb5a82cd7e1f3cd68ee422569273d7951031d))
  *  properly handle possible presence of label on raw datum ([840a6cbc](https://github.com/plouc/nivo/commit/840a6cbc84e8bf69b2ebdea6062831745143f523))
  *  rename generics raw datum type to RawDatum instead of R ([f71cd5b5](https://github.com/plouc/nivo/commit/f71cd5b5052d7348c59113b2da1b35e796b85864))
  *  use optional chaining and nullish coalescing ([a770ed51](https://github.com/plouc/nivo/commit/a770ed518f8939f97e9c183db7142013a0f95f6e))
  *  get default pixel ratio from window if available ([ff242a95](https://github.com/plouc/nivo/commit/ff242a959116411f3398040f4fe14ff1dbe2a3f7))
  *  remove unnecessary ts ignore ([e9898aef](https://github.com/plouc/nivo/commit/e9898aef9c4e50c1f47611c5c050c2e8e6444b9a))
  *  finalize TypeScript migration ([60c80a90](https://github.com/plouc/nivo/commit/60c80a906e082febb9209feebae425372820468e))
  *  remove definitions file to types ([e84d3a9b](https://github.com/plouc/nivo/commit/e84d3a9b195f43eb5f0a543b905fcf76d48b084b))
  *  init pie package migration to typescript ([9fd5cee1](https://github.com/plouc/nivo/commit/9fd5cee1d6fe98fc10d497aaaac167afb44681f1))
  *  add tests to check various layouts ([0335b6d2](https://github.com/plouc/nivo/commit/0335b6d242e54241bc6a848e74951a9b51cec9b0))
  *  add tests for legends ([ba4fb4de](https://github.com/plouc/nivo/commit/ba4fb4ded8ef3c25bf2c91e56395c024fd884a22))
  *  improve TypeScript definitions ([d0a104e5](https://github.com/plouc/nivo/commit/d0a104e55ee060c22dce0cc8c36e8855b499abc7))
  *  change tooltip override management to disable default wrapper ([0f3eaed4](https://github.com/plouc/nivo/commit/0f3eaed4f0bb2d5dbf22c0be7ff12ca4d4843876))
  *  add tests for radial labels ([8cd3180a](https://github.com/plouc/nivo/commit/8cd3180a803b8730d02b6882f7de56b033562ba9))
  *  adapt swarmplot example using usePie hook ([d02e1e90](https://github.com/plouc/nivo/commit/d02e1e906626a1c0e60c4a17078e4d1ac64500c7))
  *  add missing props to API example ([615e3502](https://github.com/plouc/nivo/commit/615e350253358e00d13fead568d859f0bcf968c4))
  *  add tests for interactivity ([3f4f17e6](https://github.com/plouc/nivo/commit/3f4f17e6e78fc291a6eda320379d886d3eec7f5d))
  *  add story to showcase custom layers ([17b129d2](https://github.com/plouc/nivo/commit/17b129d26e73149ccbfd7f2e7071354ac20b79f3))
  *  add story to showcase the ability to use colors defined in dataset ([92f19c28](https://github.com/plouc/nivo/commit/92f19c289d83fc22dd446b4c10e69c8430ad44a4))
  *  add support for extra interactivity handlers ([ebaf86e6](https://github.com/plouc/nivo/commit/ebaf86e67807359c17d5e7458d5bd2eff3d373f8))
  *  use same tooltip for both svg and canvas implementations ([baa8af89](https://github.com/plouc/nivo/commit/baa8af89405ed9b3b8e09ffded3b9cceb5278155))
  *  improve PieSlice component ([b2c2bf1f](https://github.com/plouc/nivo/commit/b2c2bf1fb05633bdbbc16c9ef15bd8afae9f4350))
  *  memoize radial labels computation ([dbab51b2](https://github.com/plouc/nivo/commit/dbab51b28540cc724bb3a427f56dd9148720370b))
  *  honor isInteractive for svg implementation ([2a8cded4](https://github.com/plouc/nivo/commit/2a8cded423b4a458b298ab33488d29769d326311))
  *  use same computation for radial labels for both SVG and canvas implementations ([1c3f704d](https://github.com/plouc/nivo/commit/1c3f704d98d8c1835674c520c6de50710aaa8c2e))
  *  add tests for slice labels ([fd5b0470](https://github.com/plouc/nivo/commit/fd5b047041bc5e82f31847eafff014d9ebd712d0))
  *  use same computation for slice labels for both SVG and canvas implementations ([c22be686](https://github.com/plouc/nivo/commit/c22be686939203a4e37708032b47f1153b411853))
  *  add support for sliceLabelsRadiusOffset ([d913f50c](https://github.com/plouc/nivo/commit/d913f50c652fd1a558854e755af44024dfb0aa7b))
  *  homogeneize sliceLabels properties ([19444c72](https://github.com/plouc/nivo/commit/19444c72431c900fd33db5c67f62c4a4009abbec))
  *  improve internal props naming ([ed176a92](https://github.com/plouc/nivo/commit/ed176a92d71d8e41980e41834510b1f4c50e1c5e))
  *  document the interface of props passed to custom layers ([055e4775](https://github.com/plouc/nivo/commit/055e47755da2b2e441c542837f0fa68a4b1aa09b))
  *  document layers property ([b5ed2d4b](https://github.com/plouc/nivo/commit/b5ed2d4bfab5129fe20b6d4d5b292d2f277c88a2))
  *  add support for layers to Pie component ([a8f64685](https://github.com/plouc/nivo/commit/a8f646853a2fe0ba1220cf137f0e9099962cd925))
  *  add tests for colors ([f0cefd2e](https://github.com/plouc/nivo/commit/f0cefd2ede867368d8ef0a29139feffe0c4afbd0))
  *  add tests regarding data handling ([4abe3f35](https://github.com/plouc/nivo/commit/4abe3f3538282e6ee2c22d420eba67fc4f2fd66e))
  *  move @nivo/core to peerDependencies ([2aef261f](https://github.com/plouc/nivo/commit/2aef261fd8812ce6b260947587bb7cd62bd11fda))
  *  restore border for PieCanvas ([eab1311c](https://github.com/plouc/nivo/commit/eab1311cb5bf0e3d294bffbfc4f589d7d8228935))
  *  fix PieCanvas ([789d52a0](https://github.com/plouc/nivo/commit/789d52a055f27b827f866e0cc4eb18f9177dbdea))
  *  use theme hook instead of prop for PieRadialLabels ([7e415396](https://github.com/plouc/nivo/commit/7e41539698931ea140c17fb9aaddca2f1149f46c))
  *  use hooks instead of props to handle tooltip ([97974824](https://github.com/plouc/nivo/commit/97974824e8128967e473b4236df25e2b0acc9432))
  *  use hooks instead of component to compute layout ([6e298727](https://github.com/plouc/nivo/commit/6e298727091a78e5574fb30b00ab224ec5bd0ce7))
  *  pass datum to pie legend data ([5292831f](https://github.com/plouc/nivo/commit/5292831f0c5002b3163c1a73314057204cbd1b74))
  *  remove unused react-motion dependency ([3c7d65ce](https://github.com/plouc/nivo/commit/3c7d65ce58cd276dd234dadad10583cb2aa8996d))



<a name="v0.63.1"></a>
## v0.63.1 (2023-07-31)


#### Bug Fixes

* **annotations:**  switch to useAnimatedPath hook ([6c8b767e](https://github.com/plouc/nivo/commit/6c8b767e1b05a1434099ac6dd3169431159d05da))
* **bar:**  Fix BarItemProps types (#1163) ([7f19561a](https://github.com/plouc/nivo/commit/7f19561a444d3e01910239c3b3894b20c638ff86))
* **bump:**
  *  switch to useAnimatedPath hook ([5ddb2ec2](https://github.com/plouc/nivo/commit/5ddb2ec2c11b40894a01cfe354397202ba9a6957))
  *  update input datum types for undefined/null (#1096) ([259e037f](https://github.com/plouc/nivo/commit/259e037f52b0b4134dd2fa0abec221bcb9f939c1))
* **ci:**  switch to GitHub actions (#1175) ([0affed68](https://github.com/plouc/nivo/commit/0affed6889b2653545ecac3f287af360b563e3a3))
* **funnel:**  switch to useAnimatedPath hook ([d4578414](https://github.com/plouc/nivo/commit/d457841430812520d5068b5888883f497a60c702))
* **line:**  animate paths properly ([6d2cd274](https://github.com/plouc/nivo/commit/6d2cd274e3c5b52c322e50f8e3708d560ef58513))
* **parallel-coordinates:**  switch to useAnimatedPath hook ([d755a11d](https://github.com/plouc/nivo/commit/d755a11d3c58000607b08be4907b5174a4eacb28))
* **radar:**  switch to useAnimatedPath hook ([e7991283](https://github.com/plouc/nivo/commit/e79912838533311816ede34f282708af71f755e0))
* **sankey:**  switch to useAnimatedPath hook ([a5cdf26f](https://github.com/plouc/nivo/commit/a5cdf26f789ef3d55981f0cdcc579c7f37c4ebcc))
* **storybook:**  always pull latest version of generators package (#1176) ([9e230cef](https://github.com/plouc/nivo/commit/9e230cefc80944a28a3e903ac0756777895832e0))
* **stream:**  switch to useAnimatedPath hook ([d983b19c](https://github.com/plouc/nivo/commit/d983b19c844f3208d3e21d81e979ec99ac976c3f))



<a name="v0.63.0"></a>
## v0.63.0 (2023-07-31)


#### Features

* **a11y:**
  *  add ability to set `role` prop on all charts (#1128) ([7d52c072](https://github.com/plouc/nivo/commit/7d52c072cc27fbb9cd1728c8127e676cb56c324a))
  *  add changes to allow for improved accessibility on charts (#1054) ([464185c8](https://github.com/plouc/nivo/commit/464185c8758f72880c40778f1507edff5bfef697))
* **annotations:**  replace react-motion by react-spring ([7acc5721](https://github.com/plouc/nivo/commit/7acc5721e860cf78c2adf8a0a7d96dd02b6bb90f))
* **axes:**  replace react-motion by react-spring ([50c135d6](https://github.com/plouc/nivo/commit/50c135d6b983948b6b7ad87300772faa583dd9ca))
* **build:**
  *  remove custom nivo babel preset ([2083f8bd](https://github.com/plouc/nivo/commit/2083f8bd410a2e269599310b8e32b862375a5469))
  *  use react app babel preset ([18a8dd14](https://github.com/plouc/nivo/commit/18a8dd1430cb8b40c2610b543f795a7e2c34e044))
  *  change .esm suffix to .es ([aecf5b08](https://github.com/plouc/nivo/commit/aecf5b0849db4a2ff6987c842067b97241c1b03d))
  *  generate source maps for packages ([39a83fd4](https://github.com/plouc/nivo/commit/39a83fd401d59fd5125c22a1755bff33c226819c))
* **bullet:**  support ranges that support < 0 ([5dc5ce69](https://github.com/plouc/nivo/commit/5dc5ce699347ffa2a4088bd12005e684fd2abf73))
* **bump:**
  *  remove lodash dependency ([6f6aff3c](https://github.com/plouc/nivo/commit/6f6aff3cf22fd73bc567e864968f18967f003efc))
  *  replace react-motion by react-spring for Bump ([edf2daf6](https://github.com/plouc/nivo/commit/edf2daf63f360fd1c4d78229ddff233bc2ddf080))
  *  replace react-motion by react-spring for AreaBump ([90c3232c](https://github.com/plouc/nivo/commit/90c3232c47d0a809a67e8ca32aadb429e2a7598e))
* **calendar:**
  *  remove recompose and convert to hooks (#1040) ([daebd61f](https://github.com/plouc/nivo/commit/daebd61f3f7ab350aaa3674ed3134e38bc3c18a1))
  *  add monthSpacing prop (#964) ([8f55046e](https://github.com/plouc/nivo/commit/8f55046e04971da31654aa7adeb07ea692655f69))
* **ci:**  update Node.js version on CI to run v12 ([3888a729](https://github.com/plouc/nivo/commit/3888a729c581fafb45194bcc565eaed2fc96e2d6))
* **core:**
  *  replace react-measure with custom hook ([3e337cda](https://github.com/plouc/nivo/commit/3e337cda0a93b8665c7843280a6dea991d076751))
  *  remove SmartMotion component in favor of react-spring built-in support for various interpolators ([15177207](https://github.com/plouc/nivo/commit/15177207d55e818621e0b918b5c9f2ab6a4100a4))
* **funnel:**
  *  add funnel documentation screenshots ([ed1e58a9](https://github.com/plouc/nivo/commit/ed1e58a923d479c1fcf05fe7f48071330ca66175))
  *  disable stories ([4f6dc92a](https://github.com/plouc/nivo/commit/4f6dc92a47c9573fc15516f3e42ddc9e7a2cc65c))
  *  add TypeScript definitions ([2748dc10](https://github.com/plouc/nivo/commit/2748dc108f328004d3f77374c4ac831870a3c95f))
  *  add support for tooltip ([6ce539cb](https://github.com/plouc/nivo/commit/6ce539cbda6293dd67655c4d07ef4091c91ec78e))
  *  add the ability to disable animations ([7055d3d9](https://github.com/plouc/nivo/commit/7055d3d97b74535eef41e960160ae2b1996743d7))
  *  improve animation management ([99359f57](https://github.com/plouc/nivo/commit/99359f57000dca4832031604c08e657c8c5b249b))
  *  add support for custom event handlers ([bbdbc373](https://github.com/plouc/nivo/commit/bbdbc373686b44675c9dd6cbd0d4bcb6a7f672ec))
  *  add support for annotations to Funnel component ([9fca13ce](https://github.com/plouc/nivo/commit/9fca13ce9fb77a7f049a66cbdf7b8665ad267fa6))
  *  add support for current part ([a69780fd](https://github.com/plouc/nivo/commit/a69780fd753885fea17b95a4a9a28a27a527e335))
  *  update funnel icon ([826c08f6](https://github.com/plouc/nivo/commit/826c08f66482b2e8cfe8790c4a2d7dab06e62184))
  *  add support for animation to Funnel component ([e487a764](https://github.com/plouc/nivo/commit/e487a76461319600b3024bb6304b0a9077f089e9))
  *  add widget to be ease creation of d3 value formatters ([5f0bf7dc](https://github.com/plouc/nivo/commit/5f0bf7dcde4695e46e291593c28498a9a07c0a83))
  *  init @nivo/funnel package ([e2d1ce88](https://github.com/plouc/nivo/commit/e2d1ce8803d991c56d9bc204e5ce07dee66de109))
* **generators:**  add network data generation (#1082) ([46bf12c3](https://github.com/plouc/nivo/commit/46bf12c355c073ddf7294a97045ffa151cd7d1ac))
* **heatmap:**
  *  improve useHeatMap hook ([62b2e597](https://github.com/plouc/nivo/commit/62b2e597159f1de4f6e596fa7d164ee65795fa20))
  *  move cells computation to main hook ([80701b1f](https://github.com/plouc/nivo/commit/80701b1f8cddeff2f72dcadfd67d5eb3cbc4eb06))
  *  use hooks instead of recompose for HeatMapCanvas ([f823ea61](https://github.com/plouc/nivo/commit/f823ea61e5766d98ef80db16f6b88f1ed473dbb2))
  *  use hooks instead of recompose and migrate to react-spring ([6d6528aa](https://github.com/plouc/nivo/commit/6d6528aaba9c3d9f2cfbcf61a986c6789844fbcd))
* **infrastucture:**  upgrade rollup, babel, typescript and prettier ([b08e7917](https://github.com/plouc/nivo/commit/b08e79176eadd353794ef1318cffc10f6889d494))
* **line:**
  *  add custom layer support to LineCanvas (#987) ([1e5fd14d](https://github.com/plouc/nivo/commit/1e5fd14d30f0a55731e6a704491a7ede8c9e7d70))
  *  replace react-motion by react-spring ([ca452490](https://github.com/plouc/nivo/commit/ca45249082b81a9c37194a2ca7c695865a2c1592))
* **network:**  add support for tooltips (#1080) ([4d8e822e](https://github.com/plouc/nivo/commit/4d8e822ebe55a58e7c673304e9a315649875fecb))
* **parallel-coordinates:**  use hooks instead of recompose and migrate to react-spring ([0760d942](https://github.com/plouc/nivo/commit/0760d942c4711bba6191efe07e146e0ebd034c25))
* **radar:**
  *  remove lodash dependency ([6e5c7f9f](https://github.com/plouc/nivo/commit/6e5c7f9f2f0259df030d296ddddd2c9e6305ecac))
  *  replace react-motion by react-spring ([9e9c4984](https://github.com/plouc/nivo/commit/9e9c4984a906838d00cd81e873816ae2862a2fae))
* **sankey:**
  *  restore previous tooltip positioning ([7666935b](https://github.com/plouc/nivo/commit/7666935b9324674879ea522f156e22ae427d14f0))
  *  use hooks instead of recompose and migrate to react-spring ([b08c691d](https://github.com/plouc/nivo/commit/b08c691d0baecaf8e32d57892351894c2eecfaf1))
* **scales:**  Add support for symlog scale (#1097) ([954bef75](https://github.com/plouc/nivo/commit/954bef7545ba6d279e9d61b813960a748d13144f))
* **stream:**
  *  restore previous tooltip positioning ([611a72bd](https://github.com/plouc/nivo/commit/611a72bdb7612e22b2bad4074202008302fcc34f))
  *  use hooks instead of recompose and migrate to react-spring ([0c8dd3bc](https://github.com/plouc/nivo/commit/0c8dd3bc0a102f80da6628c2a767ed3786d0696a))
* **sunburst:**
  *  add support for custom tooltip #1024 ([9a5b1e42](https://github.com/plouc/nivo/commit/9a5b1e42151b187ea6bf4409658e12b3187314c9))
  *  Add typescript definition (#995) ([a32603ce](https://github.com/plouc/nivo/commit/a32603ce793f839eccf58d2cb22bdfc7abfd83fb))
* **swarmplot:**  add time scale support (#1121) ([9a19da66](https://github.com/plouc/nivo/commit/9a19da666e030219af440e2da8b4bf7d7a281106))
* **tooltip:**
  *  improve TooltipWrapper component for animation ([d969d836](https://github.com/plouc/nivo/commit/d969d836e89f731546ff241bee6daa9c3c09b895))
  *  restore animation and use new measure hook ([691125c1](https://github.com/plouc/nivo/commit/691125c1d12bb8cd53018ec1c5ab956a8d654a13))
  *  replace react-motion by react-spring ([a5850bc5](https://github.com/plouc/nivo/commit/a5850bc54119b0b5cf3083f735134c838239b2d7))
* **treemap:**
  *  restore pattern and gradient support for TreeMap component ([5e4ea120](https://github.com/plouc/nivo/commit/5e4ea120ffdb93134616c4f5677a6338539b0544))
  *  add stories to demo pages ([4b3241cd](https://github.com/plouc/nivo/commit/4b3241cd3bf8eff5198526e0f415d20510954e39))
  *  update treemap documentation screenshots ([43e625fa](https://github.com/plouc/nivo/commit/43e625fa33de7154683653d1ca7006e15b5c8e22))
  *  update stories ([f90f979d](https://github.com/plouc/nivo/commit/f90f979d57ff86e5292df4823bc58a655be4efa9))
  *  add support for parent labels ([c705f3e7](https://github.com/plouc/nivo/commit/c705f3e7da87943b8848f3d6ebd3b20af5d77e2c))
  *  add TypeScript definitions ([f1d9a3b9](https://github.com/plouc/nivo/commit/f1d9a3b9544d17f91255f7fec69e9ead35e5e552))
  *  use hooks instead of recompose and migrate to react-spring ([5ff360ef](https://github.com/plouc/nivo/commit/5ff360ef1a4e2f67a790e276af0530c65c2e8041))
* **website:**
  *  add theme property documentation to all components ([f967380e](https://github.com/plouc/nivo/commit/f967380e2900d893f5174c5070743a9b4dffa9ec))
  *  add theming guide ([975503ab](https://github.com/plouc/nivo/commit/975503ab21ca02e7846e4ea079c86438b380c18b))
  *  add ability to configure x/y formats from UI ([022ddf8d](https://github.com/plouc/nivo/commit/022ddf8ddf40d2da8392ad2c000ccd0a77830bd6))
  *  update heatmap motion config control for react-spring ([25ba5662](https://github.com/plouc/nivo/commit/25ba56629f9f271d73bdb7eaac35702ecc2f4eb7))
  *  add the ability to control react-spring config ([457ebfa4](https://github.com/plouc/nivo/commit/457ebfa490e6809f567155eb8789fb45d03cc05c))

#### Bug Fixes

* **bump:**  Add types for defs to AreaBumpSvgProps (#997) ([da9ea7f8](https://github.com/plouc/nivo/commit/da9ea7f84aafbcadc955c4457cf6ecae588f724e))
* **calendar:**  Add 'monthLegendPosition' definition (#1007) ([f58298ef](https://github.com/plouc/nivo/commit/f58298efa86c09a7b3807abcc3d33403a92a0fe2))
* **core:**
  *  Add missing Theme types to match default theme object (#1135) ([861000fc](https://github.com/plouc/nivo/commit/861000fcb31a95ed9053b9c2735dc9d19ba665d5))
  *  add Defs types and export for typescript (#1146) ([99b520e9](https://github.com/plouc/nivo/commit/99b520e9621e77472b8c922d85a0fcd7bc5e00cc))
* **core / swarmplot:**  Improve core and swarmplot typedefs (#1151) ([e370ea87](https://github.com/plouc/nivo/commit/e370ea87935cfb28ac863f488a1d4f2104f1cc85))
* **dependencies:**  remove forced package resolutions ([5be120a1](https://github.com/plouc/nivo/commit/5be120a1a52e2234b2df362b0bb5aa485e3956f4))
* **install:**  force resolution of fsevents package ([fbcafd14](https://github.com/plouc/nivo/commit/fbcafd1491d47fa878338b2cdd87b54d34f36b6d))
* **legends:**  Respect theme fill color (#941) ([fa847f6a](https://github.com/plouc/nivo/commit/fa847f6ad76c6841ff094cd1c7f3b4f160fa7d1c))
* **line:**  change points ordering on stacked lines (#1060) ([c10edbf0](https://github.com/plouc/nivo/commit/c10edbf027fe8346f64da0b39f57b9af303a81c5))
* **pie:**  tooltip props typing (#1088) ([54215e7e](https://github.com/plouc/nivo/commit/54215e7e77be7a1b42e365ceddf187f279dea3c2))
* **radar:**
  *  Add return type of GridLabelCustomFunction (#1045) ([f87be93a](https://github.com/plouc/nivo/commit/f87be93ad19eeaa3673e9a4da2dc57513f4bad5f))
  *  add theme prop to types (#1029) ([74001a66](https://github.com/plouc/nivo/commit/74001a660ef9c632bd8b46311f68bc2dd445d06d))
  *  fix eslint errors ([d96fb311](https://github.com/plouc/nivo/commit/d96fb311d22eb0ccf994681b6f59f3adf9c2d922))
* **sankey:**  Fix issue with gradient and parentheses in IDs (#1152) ([56f0e449](https://github.com/plouc/nivo/commit/56f0e4494096c76d8ad637e714a2b1515e0d7b9c))
* **scatterplot:**
  *  Support DerivedNodeProp for nodeSize prop (#1134) ([42adacd9](https://github.com/plouc/nivo/commit/42adacd99da1bf47a0099bdcd56b95a33fcc359d))
  *  adjust type/proptype of `data[].id` prop (#1147) ([52c1bc15](https://github.com/plouc/nivo/commit/52c1bc155b58c522c8dc3ca3d43385630b0c563c))
  *  onMouseLeave not firing when mesh is used (#1064) ([fb4aef0c](https://github.com/plouc/nivo/commit/fb4aef0c062901d0f71d23a2ac2d7eb005a2729e))
  *  fix canvas missing annotations layer (#1043) ([d2ceffc7](https://github.com/plouc/nivo/commit/d2ceffc7bdd29a83ea1f3236d96e36aea0cffb36))
* **treemap:**  fix treemap package nivo dependencies ([dbcd2167](https://github.com/plouc/nivo/commit/dbcd21676863c6264bcd3dcf159f3c8f20ec7a03))
* **website:**
  *  fix missing prop for Calendar API demo ([b8c7c995](https://github.com/plouc/nivo/commit/b8c7c995ecf6f266c25dc77c5dfa32fbee5ed29a))
  *  fix TreeMap usage on homepage ([09d3bc9f](https://github.com/plouc/nivo/commit/09d3bc9ff2efcbc4a387012dc68e3be368d2a13d))
  *  fix TreeMap in colors guide ([24327df4](https://github.com/plouc/nivo/commit/24327df4e032c4f089ca1fb5550e639e82526982))



<a name="v0.62.0"></a>
## v0.62.0 (2023-07-31)


#### Features

* **bar:**  pass showTooltip and hideTooltip functions to custom layers ([f1bff166](https://github.com/plouc/nivo/commit/f1bff166d0ca4a1ba12b9d54420e2983167f3854))
* **bump:**  add support for defs/fill properties to AreaBump (#926) ([c5d5d86f](https://github.com/plouc/nivo/commit/c5d5d86f3cb04820a7de5629b38842d6100fa4ef))
* **line:**
  *  pass the state to a custom layer (#656) ([07d2c3f2](https://github.com/plouc/nivo/commit/07d2c3f2e78b04ef47a8681a0698df98e0703fc2))
  *  add gradient support to line areas (#844) ([b84ec05a](https://github.com/plouc/nivo/commit/b84ec05af21d192248edb18c56eb6c852b9492f7))
  *  Updated @nivo/line typescript definition to add all curve options (#197, #944) ([7b3c503b](https://github.com/plouc/nivo/commit/7b3c503bc6c31e8afa4b765cba0824e58540a686))
* **scatterplot:**  Add support for annotations on scatterplots (#882) ([ffc759ea](https://github.com/plouc/nivo/commit/ffc759ea9a42ec149927cb14cf473ba9e9678575))
* **website:**
  *  add a references page to the website (#725) ([bdd45de5](https://github.com/plouc/nivo/commit/bdd45de5daaf1ea3b9c010a635f85234909033a8))
  *  add link to d3-format documentation for line & scatterplot value formatters ([98a4f439](https://github.com/plouc/nivo/commit/98a4f4394479c0d61c0f7c8ee7a52ce0b380b5f9))

#### Bug Fixes

* **axes:**  add typedef exports for all components ([354ef248](https://github.com/plouc/nivo/commit/354ef24824c2afd6d50867a4b9cf9c9aa6b7c7ff))
* **bar:**
  *  add missing grid value types (#855) ([033cf9ee](https://github.com/plouc/nivo/commit/033cf9ee6d4249cc2ff3c27dc3cfcfb3e14f042a))
  *  fix linting error in types ([cbba0f2a](https://github.com/plouc/nivo/commit/cbba0f2abd5fe19f23a83ade9e9fb1ec03ec8498))
  *  fix legend order in bar (#842) ([ced84ee0](https://github.com/plouc/nivo/commit/ced84ee0d20e2ef0b3037a309c424e0c4fe5f3a7))
* **core:**  add missing crosshair definitions to theme (#915) ([211d76d8](https://github.com/plouc/nivo/commit/211d76d8749e273969ac15fef59647589bc84baa))
* **heatmap:**  add missing type for tooltip property ([f4d4ea62](https://github.com/plouc/nivo/commit/f4d4ea623beed68c5d54a49f9f7b17cccef4ee8d))
* **line:**
  *  typings fix for custom layer props (#887) ([a293a648](https://github.com/plouc/nivo/commit/a293a648f324a7ed4090851f7f411784902d77ba))
  *  fix typescript definition for areaBaselineValue prop. (#961) ([9b1ed9cd](https://github.com/plouc/nivo/commit/9b1ed9cd80fbc487780f9c81bd976a739853d08b))
  *  add types for pointLabel function ([b5464bba](https://github.com/plouc/nivo/commit/b5464bba0a122f4dd39463a99da45ddc7ad34a7f))
  *  fix onMouseLeave firing ([f2816f44](https://github.com/plouc/nivo/commit/f2816f44f2fad60025d57bca6721c3c1cec8f14b))
  *  add missing layer 'crosshair' to TypeScript definition (#917) ([81d8fa0b](https://github.com/plouc/nivo/commit/81d8fa0b21a42f35cedde1b782f663364b6062dc))
* **pie:**  address some issues with data label prop (#967) ([d4714b6c](https://github.com/plouc/nivo/commit/d4714b6ceda90698f8f335fa1c5730a10599a7ae))
* **sankey:**  add missing motion typedefs and proptypes ([bc5489c9](https://github.com/plouc/nivo/commit/bc5489c9d995d84922ef6211b52a2fd14e8fee7a))
* **scales:**  fix timeScale min/max values and typings (#743) ([bcb45167](https://github.com/plouc/nivo/commit/bcb451670ed535a10f24cfa148a622b588eb6504))
* **scatter plot:**  add gridValues to ScatterPlot (#853) ([cf0fd6bd](https://github.com/plouc/nivo/commit/cf0fd6bdaacd36edfacbb951a036de19ce374aae))
* **scatterplot:**
  *  fix serieId typing (#886) ([ef1ee4c5](https://github.com/plouc/nivo/commit/ef1ee4c5c7f6bf3f0d9bd1defd3d5c32516cb098))
  *  remove TypeScript redefinition of Scale (#935) ([35b1681e](https://github.com/plouc/nivo/commit/35b1681e70369d864578a03205ef37a6c1fe5b14))
  *  fix no implicit any error on CustomTooltip (#857) ([7ad8ba75](https://github.com/plouc/nivo/commit/7ad8ba755e44323172222d9ecbf413fa6644d939))
* **storybook:**  add useUTC:false to line timeScale ([f3ba3f98](https://github.com/plouc/nivo/commit/f3ba3f985d3c78fa0358a6154e6d797d120caec4))
* **types:**  improve typings for onMouseLeave/Enter in Bar/Pie (#939) ([422ef569](https://github.com/plouc/nivo/commit/422ef5698d32a4ba86fa662e0761b526aaed2fa7))
* **website:**
  *  fix xScale.type option for line chart ([ad77a5f5](https://github.com/plouc/nivo/commit/ad77a5f54942b8b80dce228905de40115ae64e08))
  *  fix spelling mistake (#805) ([468a5538](https://github.com/plouc/nivo/commit/468a5538cde92b6125b149d14a11a714baee7382))
  *  Add closed bracket in gradients example code (#889) ([15bc0ee7](https://github.com/plouc/nivo/commit/15bc0ee73e2890c65f2effd13923a78f6269a6e0))



<a name="v0.61.2"></a>
## v0.61.2 (2023-07-31)


#### Features

* **sankey:**  add support for layers to Sankey ([842ae0df](https://github.com/plouc/nivo/commit/842ae0df00c239dac526d148645841027bd60552))



<a name="v0.61.1"></a>
## v0.61.1 (2023-07-31)


#### Bug Fixes

* **geo:**  add missing dependency for legend data memoization ([887c57e7](https://github.com/plouc/nivo/commit/887c57e7b91ff7052fa657290e2b29889f87362a))
* **legends:**
  *  make sure to pass the theme object when using canvas legends ([ae621162](https://github.com/plouc/nivo/commit/ae6211629fd5ed56f98bceb83e9355a74b962dc7))
  *  honor theme font settings for labels ([e4a65fc4](https://github.com/plouc/nivo/commit/e4a65fc4199465bfe1a0920d30c0c7bc2aa72711))
  *  fix vertical alignment of canvas labels ([559e3c78](https://github.com/plouc/nivo/commit/559e3c78ff1298584f8e410b9c5cf8a47f7cce76))



<a name="v0.61.0"></a>
## v0.61.0 (2023-07-31)


#### Features

* **bump:**  add support for function for start/end labels ([80c3e92b](https://github.com/plouc/nivo/commit/80c3e92b322fc94d5d85ba79e6d3cc74b3210f1e))

#### Bug Fixes

* **bump:**  fix points keys & motion and code formatting ([d92a9655](https://github.com/plouc/nivo/commit/d92a9655028a34eda89465e04288022126fd2148))
* **prop-types:**  fix missing prop types on various packages ([8d0fe0d9](https://github.com/plouc/nivo/commit/8d0fe0d91cfdc7efb1428b341afa087a3fdb411a))
* **publish:**
  *  add missing npm-normalize-package-bin package ([91acdf21](https://github.com/plouc/nivo/commit/91acdf218de91659928fcbb13f31463d50501d67))
  *  fix lerna arg ([97fcb868](https://github.com/plouc/nivo/commit/97fcb86849a8d90bc056cda184c22b37d2680a40))
* **scatterplot:**  fix scatterplot unit tests ([c6b01ff1](https://github.com/plouc/nivo/commit/c6b01ff1a608f8bee0b1c77b8db0f264cb88dbf5))



<a name="v0.60.1"></a>
## v0.60.1 (2023-07-31)


#### Features

* **bump:**
  *  skip serie labels for missing data ([04a13a72](https://github.com/plouc/nivo/commit/04a13a728c5185a6166ba9995bb1aa07736c297e))
  *  add support for missing data to Bump component ([7275fa89](https://github.com/plouc/nivo/commit/7275fa89b8638d18e930d660cef1bbf864335959))
  *  add active/inactive state to points ([ee906f41](https://github.com/plouc/nivo/commit/ee906f41b31653d0533473e45cb8170ddc58800b))
  *  pass original datum to each point ([b4c739d2](https://github.com/plouc/nivo/commit/b4c739d2ca8f9b7c31928276c35f1b161a0e1686))
  *  add ability to use custom point component ([b29fed2a](https://github.com/plouc/nivo/commit/b29fed2a7d388a65a8e2d3fc134cb6ccb77a51e0))
* **line:**  add option to format x/y values in tooltip (#731) ([f92abbed](https://github.com/plouc/nivo/commit/f92abbed0192a92f5bf98e559cbd29ad87f654fb))

#### Bug Fixes

* **bar:**  add ability to use number for grid lines (#669) ([3d48b94d](https://github.com/plouc/nivo/commit/3d48b94d5e8e66665691129578fab4c55fa61d49))



<a name="v0.60.0"></a>
## v0.60.0 (2023-07-31)


#### Bug Fixes

* **bar:**
  *  add missing borderColor type to nivo/bar (#704) ([050f0a98](https://github.com/plouc/nivo/commit/050f0a98239ced802fd8d9582da49f6f9c588809))
  *  add missing `renderTick` type to Bar's definition (#697) ([61fc2078](https://github.com/plouc/nivo/commit/61fc20786b92eb1c96ba1c543f43aa91c57591c7))
* **calendar:**  add missing exports for canvas calendar (#700) ([3f9bc623](https://github.com/plouc/nivo/commit/3f9bc62358ebf1bbab4f62a38306c59b9de122ab))
* **line:**
  *  update PropType for Line markers when using dates for the X axis (#653) ([2c9bfc2d](https://github.com/plouc/nivo/commit/2c9bfc2dee8bc8485378dfc4fb180da5734c7aec))
  *  add missing pointSymbol prop to typings ([c249df83](https://github.com/plouc/nivo/commit/c249df83b2ff46d0b3c2f92b292f381cf52cea0b))
* **sankey:**  fix issue with gradient links and spaces in IDs (#676) ([52feccbf](https://github.com/plouc/nivo/commit/52feccbfdf9c65d01238edffe83efa75eb6e248a))
* **scales:**  add `useUTC` to types (#690) ([d7c1da53](https://github.com/plouc/nivo/commit/d7c1da530aead9a97f889edb20f6ecb27a4cd6db))
* **storybook:**  fix typo in line's story (#680) ([680a6ed3](https://github.com/plouc/nivo/commit/680a6ed357843d8a1c5b527d90a6f76f45e67621))
* **tooltip:**  update tooltip TypeScript types. (#657) ([305a536f](https://github.com/plouc/nivo/commit/305a536f4cff6401da179598d9bc688822528b16))
* **website:**  fix responsive problems with component's tab (#722) ([ccbb4de0](https://github.com/plouc/nivo/commit/ccbb4de0211f0a166903750aac17ab5e74dade75))

#### Features

* **calendar:**  add support for custom color scale (#703) ([484d3080](https://github.com/plouc/nivo/commit/484d30804fbba793b536625f4737ecbd261a07ca))
* **legends:**  pass id property to symbolShape (#687) ([289e9049](https://github.com/plouc/nivo/commit/289e9049f7dad19147ef002fcd3ca2a22c1fd9f2))
* **line:**  update TypeScript definitions ([c034393a](https://github.com/plouc/nivo/commit/c034393ac00baffe770b1cfda7fb7e58e3d3776e))
* **tooltip:**  add simple fix to keep the tooltip inbounds (#631) ([395fc5e7](https://github.com/plouc/nivo/commit/395fc5e7611971fd6a2d413b3e1b5b03e096c3e5))



<a name="v0.59.3"></a>
## v0.59.3 (2023-07-31)


#### Features

* **scales:**  add ability to reverse linear scale ([2f4ddc47](https://github.com/plouc/nivo/commit/2f4ddc478939acf4fee3fa37ff59a80f44a4b61b))

#### Bug Fixes

* **voronoi:**  upgrade d3-delaunay to fix single/collinear points (#640) ([b93c96a5](https://github.com/plouc/nivo/commit/b93c96a58d4614d020142648630ab7cdffc84094))



<a name="v0.59.2"></a>
## v0.59.2 (2023-07-31)


#### Features

* **website:**  add sponsoring link ([871c7efb](https://github.com/plouc/nivo/commit/871c7efbb9ae32b60a284afad91801024ce561f8))

#### Bug Fixes

* **axes:**  treat renderTick as a React component ([4bd566c8](https://github.com/plouc/nivo/commit/4bd566c8485725260f39b1e06f3424a7416f20ab))
* **choropleth:**  add missing domain prop to typings (#634) ([fa3c220a](https://github.com/plouc/nivo/commit/fa3c220a3ff519154d74ad2bcad5eb8b5c0a033f))
* **line:**  add missing tooltip prop to typings (#568) ([0a90609b](https://github.com/plouc/nivo/commit/0a90609bd4c7f9fb29cd95b4879a857736dbb680))



<a name="v0.59.1"></a>
## v0.59.1 (2023-07-31)


#### Bug Fixes

* **axes:**  respect useUTC option on x/y scale property (#574) ([b4ca5ecc](https://github.com/plouc/nivo/commit/b4ca5ecc576226ba345e77bd918e04eb1ab98b23))
* **bar:**
  *  allow null for axes ([8a22b666](https://github.com/plouc/nivo/commit/8a22b666e24ddeafabf6085daa55d946df2c38f7))
  *  remove unnecessary ColorProps ([865e9a61](https://github.com/plouc/nivo/commit/865e9a61a15d9ec8f45b182e30374194e33cd1ca))
* **stream:**  fix bugs in typings (#593) ([9b157510](https://github.com/plouc/nivo/commit/9b157510d7bacca846d984bc166ff486938b60c8))

#### Features

* **line:**  add missing types (#605) ([f8562008](https://github.com/plouc/nivo/commit/f856200873324f08a8b317a1223834f0167063e4))
* **radar:**  pass key to tooltip format function (#587) ([cca8a9e9](https://github.com/plouc/nivo/commit/cca8a9e98b2cf3a475b81fa8fe786a9082a941a2))
* **tooltip:**  move Chip style to theme (#589) ([343e38c5](https://github.com/plouc/nivo/commit/343e38c5eb663ee0029a95c21c7dc5d93472ab35))



<a name="v0.59.0"></a>
## v0.59.0 (2023-07-31)


#### Bug Fixes

* **sankey:**
  *  improve Sankey types ([9d5c7285](https://github.com/plouc/nivo/commit/9d5c7285748f44ce8c146d41643d21ed2b55f957))
  *  change custom align story to use correct align property ([6d300ab6](https://github.com/plouc/nivo/commit/6d300ab6b08d98046331dc754d90751aea46683f))
* **scatterplot:**  fix unit tests ([3ea40c02](https://github.com/plouc/nivo/commit/3ea40c02edcfc9bec9dcd794cefd96edc128de3c))
* **website:**  correct typo on line page ([0ed7eb8a](https://github.com/plouc/nivo/commit/0ed7eb8a77266f80569f8f67dd9e2f142606b631))

#### Features

* **scatterplot:**
  *  update stories ([d55b5fce](https://github.com/plouc/nivo/commit/d55b5fce569e33d359b700ebc9be0f690c6334c2))
  *  improve ScatterPlotCanvas ([40d9d2de](https://github.com/plouc/nivo/commit/40d9d2decee9f7c762d057e0f95fdc13dcc94cf3))
  *  improve Mesh support for SVG implementation ([91f66dc4](https://github.com/plouc/nivo/commit/91f66dc4582e16b9f3ecc3e172c34618f9e9509b))
  *  fix TypeScript definitions ([ac012bad](https://github.com/plouc/nivo/commit/ac012bad6be657c1bb40625e9bd32400c154be95))
  *  adapt ScatterPlot stories ([81bf6fd5](https://github.com/plouc/nivo/commit/81bf6fd54457dc74bccf2bdcd67b353604969743))
  *  add ability to format x/y values ([7a80184b](https://github.com/plouc/nivo/commit/7a80184b68237d45780e8fac13b9028f55286938))
  *  rename symbolSize to nodeSize ([501ee0ff](https://github.com/plouc/nivo/commit/501ee0ffc4add6373d35d81fb291d20774bdd7ad))
  *  add support for mix-blend-mode ([4b667dab](https://github.com/plouc/nivo/commit/4b667dab1b5c8e4715059f6f27c0a8a012b7c9d3))
  *  migrate package to new architecture ([4397dab6](https://github.com/plouc/nivo/commit/4397dab67850d13d74890fbb0dbf3d2e89c114fb))
* **stream:**  add TypeScript definitions ([87c762cc](https://github.com/plouc/nivo/commit/87c762cc2a73eb31f54dc034523c40039ae98214))



<a name="v0.58.0"></a>
## v0.58.0 (2023-07-31)


#### Bug Fixes

* **radar:**  fix Radar cached tooltip ([a8626bec](https://github.com/plouc/nivo/commit/a8626becc9ce87229d0d16dfd02da428deee5acd))

#### Features

* **bump:**
  *  add support for transitions on Bump component ([9fa5019b](https://github.com/plouc/nivo/commit/9fa5019b6c427a82425a481554c3d08527d43169))
  *  add support for animation for AreaLabels ([3efe3fd8](https://github.com/plouc/nivo/commit/3efe3fd822b9b4062093081d374a500f5fe0c031))
  *  add TypeScript definitions for Bump ([eed820ad](https://github.com/plouc/nivo/commit/eed820ad8674244d564a1a08cb3cdf1e48a44708))
  *  add TypeScript definitions for AreaBump ([e70c4cd5](https://github.com/plouc/nivo/commit/e70c4cd5103e689f254a1504481a359c0978cd1d))
  *  add screenshots ([edf72cae](https://github.com/plouc/nivo/commit/edf72caedd0e582a1eda166cfb3bae834e63f429))
  *  add support for area transition for AreaBump ([4553d555](https://github.com/plouc/nivo/commit/4553d5551a154fe35916e8860cf781ba4b90cf41))
  *  add AreaBump component ([9b69845e](https://github.com/plouc/nivo/commit/9b69845e9242ce09d89aca8798645339438b19e1))
  *  init @nivo/bump package ([5501852d](https://github.com/plouc/nivo/commit/5501852db649210e6c76edb804b5fdcc00ee7b01))



<a name="v0.57.2"></a>
## v0.57.2 (2023-07-31)


#### Bug Fixes

* **choropleth:**  add missing domain prop (#540) ([6bf655fb](https://github.com/plouc/nivo/commit/6bf655fba86de10ee40492d7cf062562627b64ee))
* **website:**  fix storybook url config ([5c866ce7](https://github.com/plouc/nivo/commit/5c866ce7f1e2c41d6bd303debe4ef631c07c0957))



<a name="v0.57.1"></a>
## v0.57.1 (2023-07-31)


#### Bug Fixes

* **scales:**  fix time scale instantiation ([c9abfaef](https://github.com/plouc/nivo/commit/c9abfaefa241c1b7bdba7a227894424682fb4894))



<a name="v0.57.0"></a>
## v0.57.0 (2023-07-31)


#### Features

* **line:**
  *  finalize first version of LineCanvas ([bd008153](https://github.com/plouc/nivo/commit/bd008153c80295d0f0c719c30b318b940d2559dc))
  *  fix slices spacing & add support for y axis ([d56881b8](https://github.com/plouc/nivo/commit/d56881b82f5fa480830f3dcb4d22645337f9008d))
  *  add canvas implementation ([d47d5cb1](https://github.com/plouc/nivo/commit/d47d5cb1f164cf930c70d71a305af2c701643871))
* **network:**
  *  add TypeScript definitions ([f2d4ec39](https://github.com/plouc/nivo/commit/f2d4ec39eb950799161565749615715dd17c5966))
  *  add separated node and link components ([a54ac593](https://github.com/plouc/nivo/commit/a54ac593cf59f412780d0ae3967d71610b26bd0c))
  *  init network package ([2ea85816](https://github.com/plouc/nivo/commit/2ea85816dad1653d1258158d03b24ff3081b5262))

#### Bug Fixes

* **svg:**  fix text vertical alignment ([d59fb722](https://github.com/plouc/nivo/commit/d59fb722ad8cc618f257cbb90faf067ccc58c9f4))
* **website:**  fix InheritedColorControl ([862fa0bd](https://github.com/plouc/nivo/commit/862fa0bd4ea0b7a8f1abf17c87f922f76d540392))



<a name="v0.56.2"></a>
## v0.56.2 (2023-07-31)


#### Features

* **colors:**  allow plain color for ordinal scale ([b8d3abb4](https://github.com/plouc/nivo/commit/b8d3abb4bd86398193b988cc30dd98feaf365be4))
* **core:**  allow string format spec in BasicTooltip ([8b382dc3](https://github.com/plouc/nivo/commit/8b382dc3d4c7eb6b75ee0b843a2b58a9c8627862))



<a name="v0.56.1"></a>
## v0.56.1 (2023-07-31)


#### Features

* **chord:**  improve @nivo/chord package ([51a58c11](https://github.com/plouc/nivo/commit/51a58c114b22961dcca6dfe9e52494c8336e0f22))



<a name="v0.56.0"></a>
## v0.56.0 (2023-07-31)


#### Features

* **annotations:**  init @nivo/annotations package ([e0dc149d](https://github.com/plouc/nivo/commit/e0dc149dc14e34c18d9816dfb769875b255123be))
* **axes:**
  *  move all grid & axes stuff from core ([0b564147](https://github.com/plouc/nivo/commit/0b564147c47a08b21e9ebb34d6165a56966059ae))
  *  add support for legends to canvas implementation ([5dcebd63](https://github.com/plouc/nivo/commit/5dcebd63459a5917d82e60bacf39c7bfaff29e3a))
* **bar:**  use @nivo/colors for inherited colors ([c7cf5ce0](https://github.com/plouc/nivo/commit/c7cf5ce03f4b8ebe18554bff965159aba94a06eb))
* **chord:**  use @nivo/colors for inherited colors ([f16f8244](https://github.com/plouc/nivo/commit/f16f8244c6b9a6445ecbb2c3db17dca0817f8b52))
* **circle-packing:**  use @nivo/colors for inherited colors ([53ffed92](https://github.com/plouc/nivo/commit/53ffed924dd90d7bf0c10e7362e03d041e15f426))
* **colors:**
  *  use @nivo/colors for inherited colors for all packages ([e8955560](https://github.com/plouc/nivo/commit/e89555601c2f1a35009fa660e208ab2ff3bc9537))
  *  add colorIdentity support to bar & bubble ([32e61b16](https://github.com/plouc/nivo/commit/32e61b16db29926314b541125205de06bf0f26aa))
  *  init @nivo/colors package ([62644b0a](https://github.com/plouc/nivo/commit/62644b0a8375e2e308fc8d48a4742d6a6873df93))
* **examples:**  upgrade examples dependencies ([e07f58f3](https://github.com/plouc/nivo/commit/e07f58f3d9e8f325762c09936eb27cdace94fe77))
* **geo:**
  *  update choropleth screenshots ([c2f64eac](https://github.com/plouc/nivo/commit/c2f64eac104205e888626adfc6e852743515f096))
  *  add legend support to choropleth components ([bb7a0a2e](https://github.com/plouc/nivo/commit/bb7a0a2ef65c0e9a0f6b47d33281f7fcd6499cfc))
* **line:**  use @nivo/colors for inherited colors ([1347fd82](https://github.com/plouc/nivo/commit/1347fd825d4ac82517ec8e7ad2ea9a04c4f23d52))
* **pie:**  use @nivo/colors for inherited colors ([a217ab8f](https://github.com/plouc/nivo/commit/a217ab8f81fe84dadc807dc9e075aa09573a8511))
* **radar:**
  *  add blend-mode support ([e46b10c9](https://github.com/plouc/nivo/commit/e46b10c9e0fab13ab644b1f7f5dbbf1dc55247a4))
  *  improve @nivo/radar package ([96e60be0](https://github.com/plouc/nivo/commit/96e60be0d2ed4bcfcd168b9df878d33b13cb5d5d))
  *  use @nivo/colors for inherited colors ([4686b2bf](https://github.com/plouc/nivo/commit/4686b2bfa763410c55a9c67c1768dbf975a7d995))
* **sunburst:**  use @nivo/colors for inherited colors ([9cb6b2af](https://github.com/plouc/nivo/commit/9cb6b2afca6839322925f0c4a1e3eacfdf4d696a))
* **swarmplot:**
  *  add support for border color ([de3e8b3a](https://github.com/plouc/nivo/commit/de3e8b3a081a9b18ee81c07934632e9b08000e66))
  *  add ability to use custom tooltip ([83f965ad](https://github.com/plouc/nivo/commit/83f965ad4d6b7007d3224202924acdddd5a0d4c5))
  *  add support for voronoi overlay) ([4b0bcb96](https://github.com/plouc/nivo/commit/4b0bcb960004942b2af6647d249ac10b86cd3101))
  *  init @nivo/swarmplot package ([eb593954](https://github.com/plouc/nivo/commit/eb5939540d0bb73ac0af4034049253e03bcb1b7f))
* **theming:**  add ability to theme crosshairs ([f03848f6](https://github.com/plouc/nivo/commit/f03848f6ff08d5cc73638b6cc16a7c3fde7e9eda))
* **treemap:**  use @nivo/colors for inherited colors ([4b5e65b6](https://github.com/plouc/nivo/commit/4b5e65b682e1b3d19115279427193aa9db100af2))
* **website:**
  *  update colors guide ([99e66e10](https://github.com/plouc/nivo/commit/99e66e109349e0840427ca31e2dd1073bbbbfc26))
  *  add inherited color control ([4a2e0c29](https://github.com/plouc/nivo/commit/4a2e0c29f7fd68cc87b0d804e7b525f3024aa933))
  *  add swarmplot icon ([aa074697](https://github.com/plouc/nivo/commit/aa07469706a4124fb89ecf9e0e101e387801df96))
  *  improve website ([7ed59e94](https://github.com/plouc/nivo/commit/7ed59e94d6248e761dfcd2ba167b28fab9699ddb))

#### Bug Fixes

* **api:**  fix api mappings ([80b281cc](https://github.com/plouc/nivo/commit/80b281cc6a8580101499f8da747beab4412e904d))
* **legends:**  fix legends unit tests ([41dd564f](https://github.com/plouc/nivo/commit/41dd564fcc740e99fa4a1a58ba707b22a877a7b8))
* **sankey:**  fix broken custom node sorting (#498) ([319e7e07](https://github.com/plouc/nivo/commit/319e7e072ac283f8abbece696458a49ccafeaf77))
* **scatterplot:**  fix scatterplot voronoi overlay ([3bdc783e](https://github.com/plouc/nivo/commit/3bdc783e215362bd039a13eb22bd4918ca38e4a9))
* **treemap:**  add missing default colorBy ([ba91da53](https://github.com/plouc/nivo/commit/ba91da53d7e843681db0440203a9d14ae94a8f2f))



<a name="v0.55.0"></a>
## v0.55.0 (2023-07-31)


#### Bug Fixes

* **geo:**  fix custom layers ([069e4e61](https://github.com/plouc/nivo/commit/069e4e61a048c6f672a3928c2a7d648397f688a2))

#### Features

* **calendar:**  add ability to align calendar in its container ([87cc6451](https://github.com/plouc/nivo/commit/87cc6451461c4fae477747a6e6aaade10585d0c8))
* **core:**  remove enclosing div from container if non interactive ([149ed0f8](https://github.com/plouc/nivo/commit/149ed0f86e08ff14d2ae6b6b2e8af5c81fcddf2a))
* **examples:**  add Bar live update example ([26dc32a8](https://github.com/plouc/nivo/commit/26dc32a8c423044542373b97e99f8a17c8590fa8))
* **geo:**
  *  add TypeScript definitions ([d818a665](https://github.com/plouc/nivo/commit/d818a66555a91c7bdf5e80f71ea0dc559707d997))
  *  add abillity to customize label & format value ([ef499799](https://github.com/plouc/nivo/commit/ef49979962609091ef404839524e2fb278bf839b))
  *  migrate to react hooks ([9c5f1879](https://github.com/plouc/nivo/commit/9c5f18798e958abd8902be721a86a852ea2b4d1e))
  *  add support for projection translation/rotation ([a78b293a](https://github.com/plouc/nivo/commit/a78b293ad9e81b70920d83b8a5478f059cfd9fc1))
  *  add charts' icons ([54c00402](https://github.com/plouc/nivo/commit/54c00402bd40fb0148eabeb88c23a3a8c7e8490b))
  *  init geo package ([119b9e98](https://github.com/plouc/nivo/commit/119b9e985026deb72ce69441e3edfc17a6e6db4f))
* **publish:**  add cleanup rollup plugin ([0c707e61](https://github.com/plouc/nivo/commit/0c707e61c3447eaec8e80121e3c02317d9bdf445))
* **voronoi:**
  *  add TypeScript definitions ([b98f65ae](https://github.com/plouc/nivo/commit/b98f65ae9cd84c1290da16a89a6cdd5ba3c2a045))
  *  add support for layers ([c16ae70d](https://github.com/plouc/nivo/commit/c16ae70d455ccdae2fe28e4df9141f98ddcbc97b))
* **website:**
  *  udpate geo icons ([8426ef5b](https://github.com/plouc/nivo/commit/8426ef5b78f4111d04cfeb73729d7ad69722e7f9))
  *  add package to tag list ([12415ac7](https://github.com/plouc/nivo/commit/12415ac7633e59b5af8059cebfc5a5f51843c944))
  *  init guide about theming ([61459b9e](https://github.com/plouc/nivo/commit/61459b9ecba4ed14714216c774b9e8ec253d344c))



<a name="v0.54.0"></a>
## v0.54.0 (2023-07-31)


#### Bug Fixes

* **website:**  fix broken legends guide ([cc3cb0b1](https://github.com/plouc/nivo/commit/cc3cb0b15171a0d1fa7851420841adc74c2cc8d4))

#### Features

* **calendar:**
  *  add ability to add arbitrary data ([6a46b723](https://github.com/plouc/nivo/commit/6a46b723703ad4204fb484933da8878cd64489c4))
  *  add CalendarCanvas component ([96f8ac29](https://github.com/plouc/nivo/commit/96f8ac2945bcfd80d773ea23895fc7f6bf672786))
  *  add ability to define year legends position ([bf8797ae](https://github.com/plouc/nivo/commit/bf8797ae2c3e779228be2adab4a9770a7685e6cf))
  *  add ability to define month legends position ([9bc70928](https://github.com/plouc/nivo/commit/9bc70928f7c472666e2b8e023b50773765ba6fab))
  *  avoid unnecessary layout computing ([5aa0ff5d](https://github.com/plouc/nivo/commit/5aa0ff5d1664f5ea4d7507275ca6f7b05ef2f404))
  *  add support for min/max value ([e0a46f5a](https://github.com/plouc/nivo/commit/e0a46f5a7fa58727e75d81715d67db4be3bdaa92))
* **sankey:**
  *  adjust labels for vertical layout ([e12cdf15](https://github.com/plouc/nivo/commit/e12cdf15d326c2989b277d90b63ff7af478e9d08))
  *  add support for vertical sankey ([e299590e](https://github.com/plouc/nivo/commit/e299590e729db12a892b1fe8401ccf046f8e11b8))
  *  use more neutral properties for layout support ([e0a56eb6](https://github.com/plouc/nivo/commit/e0a56eb6920e291cb86dc9071568f22aea3a8b64))
  *  move computing out of the rendering component ([a0c29fe4](https://github.com/plouc/nivo/commit/a0c29fe4fb57d36e2769902ccaacce5a8ceecdb6))
  *  improve support for nodes sorting ([f63450fa](https://github.com/plouc/nivo/commit/f63450fa95c05ea5d8c31b44081e4ca91129b4de))
  *  add ability to sort nodes (#401) ([fed5fc4b](https://github.com/plouc/nivo/commit/fed5fc4b81b7b97118e22d8c186f37ed6af23995))
* **website:**
  *  change sankey default layout ([a5352e41](https://github.com/plouc/nivo/commit/a5352e41c195ea34b3b5856403ef68370db58438))
  *  use hooks for calendar pages ([fec85fa0](https://github.com/plouc/nivo/commit/fec85fa0bb095145e9ac1382f256b63571e65dc0))
  *  add doc for bar label + fix stories links ([223c5e57](https://github.com/plouc/nivo/commit/223c5e577651dafe8a7a12c912266f3835f8b253))
  *  upgrade nivo packages ([775ea0b4](https://github.com/plouc/nivo/commit/775ea0b4ca9293d5b991c263d9856f5546517e9c))



<a name="v0.53.1"></a>
## v0.53.1 (2023-07-31)


#### Features

* **api:**  fix api publication ([1ec197b5](https://github.com/plouc/nivo/commit/1ec197b58535d04a052ee7df28c818cd725e4607))
* **bar:**
  *  adjust legend data according to layout/mode/reverse ([0c0a6a18](https://github.com/plouc/nivo/commit/0c0a6a185f73e757d742a0d8ba41bc89fe5fc6f9))
  *  add ability to use borders with BarCanvas ([4568516e](https://github.com/plouc/nivo/commit/4568516ec4fb4d26bd71dac977a45ae9c4af4af9))
* **website:**
  *  upgrade react ([62f066b8](https://github.com/plouc/nivo/commit/62f066b885c15da7500e43f08b69055a33f0474b))
  *  upgrade nivo packages ([991f0781](https://github.com/plouc/nivo/commit/991f07811925f556945e4d59f990fe161e393312))



<a name="v0.53.0"></a>
## v0.53.0 (2023-07-31)


#### Features

* **build:**  upgrade rollup & add esm build ([f6d64802](https://github.com/plouc/nivo/commit/f6d64802236337140289baaa96c3a3ace0acdfaa))
* **line:**  add support for gridXValues and gridYValues (#391) ([fd49e83d](https://github.com/plouc/nivo/commit/fd49e83df001d358187bae513eac8d9fc69957d4))
* **sankey:**  decouple node coloring and link coloring (#404) ([c793ffd1](https://github.com/plouc/nivo/commit/c793ffd1bddd89745d3219fd8132c16ebf53807f))
* **storybook:**  upgrade storybook ([670d22df](https://github.com/plouc/nivo/commit/670d22df060bc56533044a7ae4e9e2aebc5d02ca))
* **sunburst:**  allow independent child colors (#463) ([2525ad11](https://github.com/plouc/nivo/commit/2525ad11fa6bbec6d03e2b814df4e526c5a8ea67))
* **theming:**  improve theming ([95dd0603](https://github.com/plouc/nivo/commit/95dd0603f29b7b0109dce7c03e2af27dc0f7779b))
* **website:**  upgrade nivo packages ([33d5508c](https://github.com/plouc/nivo/commit/33d5508c679601af59e58c65292de59cf48575fd))

#### Bug Fixes

* **jest:**  fix jest babel config ([da5edb0d](https://github.com/plouc/nivo/commit/da5edb0d3986d791507fdcc7e5e873f7bc941467))
* **tests:**  upgrade enzyme ([d69be1fc](https://github.com/plouc/nivo/commit/d69be1fc674abdad08c646463a5917d21a84bbb5))
* **typescript:**  fix TableTooltip and LineComputedSerieDatum-type (#428) ([fd35f78e](https://github.com/plouc/nivo/commit/fd35f78e93198d459b0ac14afdde09625f156e96))
* **website:**  fix wrong title on the guides/axes page (#441) ([91eacdbe](https://github.com/plouc/nivo/commit/91eacdbe6e19ecf2ba454f8d7c0a07a35e4a5f25))



<a name="v0.52.1"></a>
## v0.52.1 (2023-07-31)


#### Bug Fixes

* **bar:**  Allow BarItem label property to accept React.Element ([48c8e410](https://github.com/plouc/nivo/commit/48c8e410ba8acc5b05add184bad2542c026a21f8))
* **lodash:**  use scoped imports ([dea6a75f](https://github.com/plouc/nivo/commit/dea6a75f921e4e6e9c62a7ebb987c32fafbe04f8))
* **typescript:**  Allow axis to be AxisProps or `null` ([5d45796f](https://github.com/plouc/nivo/commit/5d45796f5a9ed8c4e7c55e979a5681e2edc10948))

#### Features

* **canvas:**  add support for custom font family (#430) ([11f039e0](https://github.com/plouc/nivo/commit/11f039e0d8c2eb5a5b69b58006aa9aebcae2c787))
* **scatterplot:**  set pointer as 'normal' not crosshair (#402) ([29848b87](https://github.com/plouc/nivo/commit/29848b878429814cc9a2c7348172a9eb4f80d46a))
* **website:**
  *  remove responsive components from explorer ([27524f18](https://github.com/plouc/nivo/commit/27524f184ff338438291facac1b7ce2e762c8d21))
  *  generate chart icons from code ([209177af](https://github.com/plouc/nivo/commit/209177afea51515c70ccdf842cf10a0c8a3b6578))
  *  upgrade nivo packages ([d1bb0571](https://github.com/plouc/nivo/commit/d1bb0571f553ffca1c2e2f8dcf17871e1f6c288d))



<a name="v0.52.0"></a>
## v0.52.0 (2023-07-31)


#### Features

* **api:**  move api to main nivo repo ([50245962](https://github.com/plouc/nivo/commit/5024596209bb0befb6f623d44d97f5663d881f4d))
* **scales:**  add support for log scale (#378) ([971925f8](https://github.com/plouc/nivo/commit/971925f89fe67f02dc3ab5e2be601bf4666d273b))
* **website:**
  *  disable service worker ([b40d620e](https://github.com/plouc/nivo/commit/b40d620e067d94a740cb63d2c36422c1dbe4d9bb))
  *  upgrade nivo packages ([fbc78c00](https://github.com/plouc/nivo/commit/fbc78c00364e9f1b6152c38d6d739ac3a3ef01f2))

#### Bug Fixes

* **bar:**  fix missing legend in Bar chart  #362 ([aa12d9d2](https://github.com/plouc/nivo/commit/aa12d9d23e43344b05c4ea103177afbe2285b6ee))
* **scatterplot:**  fix wrong legend item color in ScatterPlotCanvas (#372) ([155fdfae](https://github.com/plouc/nivo/commit/155fdfaefed512fd4b32d2e91f46055800ba1f1a))
* **website:**  use https instead of http ([07b1bade](https://github.com/plouc/nivo/commit/07b1bade670a7a7d7219f5a0aaf7849c21f23d7c))



<a name="v0.51.6"></a>
## v0.51.6 (2023-07-31)


#### Features

* **bar:**  add enableGridX/enableGridY/legends support to BarCanvas (#354) ([f872aaa1](https://github.com/plouc/nivo/commit/f872aaa11d51c76f2556807ca60fc43cf3bc2847))
* **line:**  add support for layers to Line component ([35911df3](https://github.com/plouc/nivo/commit/35911df3bebc2d4fc824e5d4e9fe38915ce5b6de))



<a name="v0.51.5"></a>
## v0.51.5 (2023-07-31)


#### Features

* **bar:**  add ability to customize tooltip label ([16ae9d5c](https://github.com/plouc/nivo/commit/16ae9d5c455bad7349598d95aa746d018c2454b6))



<a name="v0.51.4"></a>
## v0.51.4 (2023-07-31)


#### Features

* **tooltips:**  improve bar & stream tooltips ([698585fc](https://github.com/plouc/nivo/commit/698585fcf9c6fcb4d2bc93fc9c384e7bd7221793))



<a name="v0.51.3"></a>
## v0.51.3 (2023-07-31)


#### Features

* **scatterplot:**  add support for layers to ScatterPlot component ([f3a5a842](https://github.com/plouc/nivo/commit/f3a5a84259d0103193a766d610a517e7527c63e3))



<a name="v0.51.2"></a>
## v0.51.2 (2023-07-31)


#### Features

* **chord:**  add support for font style for ChordCanvas ([c4f29c51](https://github.com/plouc/nivo/commit/c4f29c51408b9be6ad513d0eaf9e303ac12a19eb))



<a name="v0.51.1"></a>
## v0.51.1 (2023-07-31)


#### Features

* **bar:**  add support for layers to Bar component ([8a817ec9](https://github.com/plouc/nivo/commit/8a817ec9b632740457546aca65fb3f09c8f9ffa3))
* **website:**
  *  upgrade react-scripts ([db922af5](https://github.com/plouc/nivo/commit/db922af5a723f4b2b04c11f5ce61c04dce9e5938))
  *  upgrade nivo packages ([fd850795](https://github.com/plouc/nivo/commit/fd850795df6efdc78b0a8a6c429f54d96a094763))



<a name="v0.51.0"></a>
## v0.51.0 (2023-07-31)


#### Features

* **bubble:**  trigger onClick when isZoomable is false (#322) ([787341ac](https://github.com/plouc/nivo/commit/787341acb2e540233e2a4b94799edcf7275c5b24))
* **chord:**  add support for ribbon blendmode ([2b0cfec6](https://github.com/plouc/nivo/commit/2b0cfec62751d5bb1a17dce0b76234d86d89e295))
* **deps:**  upgrade deps ([be6e96e4](https://github.com/plouc/nivo/commit/be6e96e414349df5a000de31725ad791a6b3f831))
* **heatmap:**  use @nivo/axes package for axes ([36cd9c7b](https://github.com/plouc/nivo/commit/36cd9c7b265f708b4a0a64a0244b2748d6ee58e4))
* **line:**
  *  add support for mix-blend-mode on areas ([c434148f](https://github.com/plouc/nivo/commit/c434148f50302bffba4d3dbdb042426ea6c968fd))
  *  add typescript definitions ([cfa6a59c](https://github.com/plouc/nivo/commit/cfa6a59c87ccfd41c6069837ff72150e8440daf5))
* **scatterplot:**
  *  add ability to use a mesh to capture interactions ([ff9399fa](https://github.com/plouc/nivo/commit/ff9399fa1d0a88a8ad696f74257b82f07d6a50a2))
  *  add scatterplot typescript definitions ([22c930d0](https://github.com/plouc/nivo/commit/22c930d0f26718a026ce06ceaa1735548efa7677))
  *  improve scatterplot ([4ae6591d](https://github.com/plouc/nivo/commit/4ae6591d47b85edc210c50d99cdf2280611ca479))
* **website:**  upgrade nivo packages ([ddb22915](https://github.com/plouc/nivo/commit/ddb22915c5718c94e2e37b20ddfc2aee639c9563))

#### Bug Fixes

* **chord:**  skip rendering for zero/negative radius ([647a496a](https://github.com/plouc/nivo/commit/647a496a250f1d558fff18ec193d2554043d1eb0))
* **heatmap:**  fix support for enableLabels property ([a866586a](https://github.com/plouc/nivo/commit/a866586abd33522558d3f552b90bc4daf655386b))



<a name="v0.50.0"></a>
## v0.50.0 (2023-07-31)


#### Features

* **axes:**  add `tickIndex` to Axis’ renderTick method (#305) ([93b85c0b](https://github.com/plouc/nivo/commit/93b85c0b55953dfcbc639164543e83ed788fd842))
* **interactions:**  add support for mouseenter/leave on bar, pie & scatterplot svg (#280) ([76c8722b](https://github.com/plouc/nivo/commit/76c8722bb90d947b1933bb00344a0bb606605159))
* **scatterplot-markers:**  add markers to scatterplot SVG (#287) ([d7192461](https://github.com/plouc/nivo/commit/d71924612f3c5a141defd06e5eab0d2487791403))
* **stream:**  add support for dots ([4860ef53](https://github.com/plouc/nivo/commit/4860ef5307af2a63662e3062cf2beef2e9286b42))

#### Bug Fixes

* **website:**  remove extra space in heatmap package name ([93077734](https://github.com/plouc/nivo/commit/93077734b6faed1beed595bff13fd8a0b16e85f2))



<a name="v0.49.1"></a>
## v0.49.1 (2023-07-31)


#### Features

* **bar:**  use @nivo/axes instead of @nivo/core for SVG axes ([3b22c6fb](https://github.com/plouc/nivo/commit/3b22c6fbfe553ee74e82481d7d7d443fe924a339))
* **examples:**  upgrade retro example deps ([203f7198](https://github.com/plouc/nivo/commit/203f719840a0f0287542567e2ca4bec8de08a5a5))
* **website:**  upgrade nivo packages ([531e492b](https://github.com/plouc/nivo/commit/531e492bea9b9d46a9633a2381dabbfe49584530))



<a name="v0.49.0"></a>
## v0.49.0 (2023-07-31)


#### Features

* **parallel-coordinates:**
  *  add support for individual axis options ([b8a39070](https://github.com/plouc/nivo/commit/b8a39070024450377314d21b27f11ceaaf623c17))
  *  init package ([5a4db6ca](https://github.com/plouc/nivo/commit/5a4db6cad3c00601ad6161adb54cf8a4c5891ff3))
* **theming:**  improve theming ([0040bb38](https://github.com/plouc/nivo/commit/0040bb38e0f5efe339ab7e96ea4c7025984bcdfe))
* **umd:**  git ignore umd builds ([58f03a59](https://github.com/plouc/nivo/commit/58f03a59a365a574fdac214d1470d670829ee268))
* **website:**  upgrade nivo packages ([47a5f8a7](https://github.com/plouc/nivo/commit/47a5f8a7e8611841ca1176d47670e1b6c5c6a993))



<a name="v0.48.1"></a>
## v0.48.1 (2023-07-31)


#### Features

* **bullet:**  interpolate colors ([96ad5f64](https://github.com/plouc/nivo/commit/96ad5f64e8ff948885d789e16765eebf4f5677f4))

#### Bug Fixes

* **build:**  add missing externals in rollup config ([e23182f2](https://github.com/plouc/nivo/commit/e23182f2de917835bd7cda267a57484b93c77290))
* **bullet:**  remove deprecated property titleWidth ([0c8e8bbb](https://github.com/plouc/nivo/commit/0c8e8bbb734e804c50e3bc235685c91d967c7c7d))



<a name="v0.48.0"></a>
## v0.48.0 (2023-07-31)


#### Features

* **bullet:**
  *  improve @nivo/bullet package ([9154c51f](https://github.com/plouc/nivo/commit/9154c51f6ec327891fa062d35042f2b1a7a0dd05))
  *  init @nivo/bullet package ([dc7b37f5](https://github.com/plouc/nivo/commit/dc7b37f5509923c55a3db1e89f451aeb459ec012))
* **theming:**  improve theming ([c7e7a9fe](https://github.com/plouc/nivo/commit/c7e7a9fe77eaf65abc1e450e1d2ce7d1b98acda9))
* **website:**  upgrade nivo packages ([1c5fd5db](https://github.com/plouc/nivo/commit/1c5fd5dbb9e99912d1df871450112c1ad678beda))



<a name="v0.47.1"></a>
## v0.47.1 (2023-07-31)


#### Features

* **axes:**  improve tickValues support ([58aeaab0](https://github.com/plouc/nivo/commit/58aeaab08eb14fa1bd52f8cd045e7e01fae4306a))
* **website:**  upgrade nivo packages ([a88e50fd](https://github.com/plouc/nivo/commit/a88e50fd21c4b4a4ff769a1b80a9e66262b7b196))



<a name="v0.47.0"></a>
## v0.47.0 (2023-07-31)


#### Features

* **components:**  fix components display name ([84aa832d](https://github.com/plouc/nivo/commit/84aa832da4d26c55e7920e3e3ad740437f124eea))
* **line:**
  *  fix line slices for time scales ([82e03d3a](https://github.com/plouc/nivo/commit/82e03d3a593b34a26ca2c2ebc1b6a97eb98ab5f7))
  *  compute slices from scales package ([31c06c0f](https://github.com/plouc/nivo/commit/31c06c0fdf1a1d45d4f0a0419d7a3b994f3f263e))
  *  add story about negative values highlight ([b425e35f](https://github.com/plouc/nivo/commit/b425e35f6ff5061023b77b1d8d41b1e118b18d75))
  *  init linear & time scale support ([3bce793a](https://github.com/plouc/nivo/commit/3bce793adc04c4cf49978517057bd47ea5359f4c))
* **scales:**
  *  improve time scale support ([614038e4](https://github.com/plouc/nivo/commit/614038e494bf935ffe601f0571a91e2ca4008e7b))
  *  init scales package ([4324706d](https://github.com/plouc/nivo/commit/4324706d07db77fdad25db23ab7e77eb54ae1f40))
* **storybook:**  improve components stories ([d29d21f4](https://github.com/plouc/nivo/commit/d29d21f483ae8761ba3abcf6cc0314b5012cb553))
* **stream:**  add info about stories ([4f98124c](https://github.com/plouc/nivo/commit/4f98124c5fca3fad59f7292366a4628925e387f8))
* **website:**
  *  change line demo data generation method ([124028de](https://github.com/plouc/nivo/commit/124028dec51dd8477ce158929ed617d7a49d72cf))
  *  upgrade nivo packages ([4aeed5d8](https://github.com/plouc/nivo/commit/4aeed5d87159164df0f045a125131f29bc2e2e5a))

#### Bug Fixes

* **colors:**  fix colors due to d3 packages upgrade ([a17d93bc](https://github.com/plouc/nivo/commit/a17d93bc859d2f202f4c2960e9c3fbee4590e581))



<a name="v0.46.0"></a>
## v0.46.0 (2023-07-31)


#### Features

* **line:**  add ability to specify grid X/Y values ([b44c8543](https://github.com/plouc/nivo/commit/b44c85437e8ccd204a266e830427f0527c5b77b5))
* **radar:**  add ability to customize label ([03b3640b](https://github.com/plouc/nivo/commit/03b3640b6aee3158e88d66868be099f16ba6e8f3))
* **waffle:**  add ability to toggle datum by id ([7f411dae](https://github.com/plouc/nivo/commit/7f411dae9d481c6118a95ff06d113ec045309480))
* **website:**
  *  add component to list storybook stories ([6b9ce02e](https://github.com/plouc/nivo/commit/6b9ce02ec79a0b8a524323300e3a14250df4cddb))
  *  add Line legends control ([91bac9ed](https://github.com/plouc/nivo/commit/91bac9ed70d27a01f5274cbfae3281ec9166fffd))
  *  upgrade nivo packages ([c0f12986](https://github.com/plouc/nivo/commit/c0f12986afef25b5ed3fd4c20de66fceec028b45))



<a name="v0.45.0"></a>
## v0.45.0 (2023-07-31)


#### Bug Fixes

* **website:**  fix legends guide ([6828c33f](https://github.com/plouc/nivo/commit/6828c33f733c39026914e7d18c2fe0b8493b3157))

#### Features

* **core:**
  *  fix prop wraning when using markup for axis legend ([4152c090](https://github.com/plouc/nivo/commit/4152c0906849aa53ef4fa311aa2a66a16402e9d8))
  *  add support for string or number keys on bar/line and pie ([953c572e](https://github.com/plouc/nivo/commit/953c572eb2ea8986b5599545bb23387202819356))
* **deps:**  upgrade deps ([3f4b4294](https://github.com/plouc/nivo/commit/3f4b4294cb3ad84a351cb4f50c4b60b39ffd88cc))
* **legends:**
  *  add support for both color and fill ([4cb33e25](https://github.com/plouc/nivo/commit/4cb33e25b12084932cd749b3e74f6f8789adbe80))
  *  add documentation for custom symbol shape ([7adc8381](https://github.com/plouc/nivo/commit/7adc8381728f53e4a392d5a8e1574cc469c769ba))
  *  add test for custom symbol shape support ([50b2d39c](https://github.com/plouc/nivo/commit/50b2d39c5bd7933f88e6fa296460c7afc311b7de))
  *  add support for custom symbol shape ([7419c912](https://github.com/plouc/nivo/commit/7419c912da7b936b1cc8eeb4d8188f11e752125e))
  *  add support for basic interactivity ([527b1fa7](https://github.com/plouc/nivo/commit/527b1fa738e267d05932e2914b52747ebda8d7fc))
* **waffle:**
  *  add legend support for WaffleCanvas ([a60b34e6](https://github.com/plouc/nivo/commit/a60b34e663a87d01d664627e414f2fda4fbe6712))
  *  add legend support for Waffle ([6a5db0dd](https://github.com/plouc/nivo/commit/6a5db0dd574050749d0944ac5ac0ebf451d51d5b))
* **website:**
  *  add ability to manage array of props ([8f44ab94](https://github.com/plouc/nivo/commit/8f44ab94bc198e10cdeebf2c6480ceb669a548b8))
  *  upgrade nivo packages ([4d819df6](https://github.com/plouc/nivo/commit/4d819df62f3a63b8b6665701a2f06e80e99719b1))



<a name="v0.44.0"></a>
## v0.44.0 (2023-07-31)


#### Features

* **core:**
  *  remove packages directory prefix ([262a8ee9](https://github.com/plouc/nivo/commit/262a8ee96bb870fe388e64d1453248aed94bf445))
  *  use yarn workspaces ([36999cc2](https://github.com/plouc/nivo/commit/36999cc216eb9d3e33f73111424e63d23143c17d))
* **line:**  add support for custom tooltip ([39fad124](https://github.com/plouc/nivo/commit/39fad12421f3b06be830da13d2efdbfccfff2e96))
* **scatterplot:**  remove unused min/max x/y ([efbda0fb](https://github.com/plouc/nivo/commit/efbda0fb54cf6b7a6c42537a6ec813975805571b))
* **website:**  add option to showcase custom scatterplot tooltip ([68b72a44](https://github.com/plouc/nivo/commit/68b72a448217963f0a7d287674be45aabef3257b))

#### Bug Fixes

* **Makefile:**  disable command priting for packages-build recipe ([1046ee2c](https://github.com/plouc/nivo/commit/1046ee2c723cd3f9d89c546f0785c72f6098f530))
* **calendar:**  fix crash when no data is empty ([5ac42141](https://github.com/plouc/nivo/commit/5ac42141d2495aa1b4afc22e6e2ada3e7b7e9a51))
* **eslint:**  fix eslint for all packages ([27bf8d0c](https://github.com/plouc/nivo/commit/27bf8d0cec55f7caf7bb18fc5f5eeeb9c4e7875e))
* **heatmap:**  better handling of NaN values ([02ef5577](https://github.com/plouc/nivo/commit/02ef55773bb3df971b5fefc876281eb72ccaae91))



<a name="v0.43.0"></a>
## v0.43.0 (2023-07-31)


#### Features

* **calendar:**
  *  add ability to define custom tooltip ([7a076bf3](https://github.com/plouc/nivo/commit/7a076bf370801bfb003be54f5bdfcf395cd959de))
  *  add stories ([d3b8951e](https://github.com/plouc/nivo/commit/d3b8951e964c5a6ad6bcc18a8161294591b5e67d))
  *  add ability to customize year/month legend ([a43c7082](https://github.com/plouc/nivo/commit/a43c7082ff9b921e9a4537db82dc1519f62012c7))
  *  add TypeScript definitions ([98106ab1](https://github.com/plouc/nivo/commit/98106ab1a2e7c5862b1a7977ff2ff92accd64933))



<a name="v0.42.1"></a>
## v0.42.1 (2023-07-31)


#### Features

* **bar:**  add ability to define grid values ([afd1ee30](https://github.com/plouc/nivo/commit/afd1ee30cc1e58a6d1dc15f75d9a1da62e8266f4))
* **pie:**  adjust website & docs ([8f22f893](https://github.com/plouc/nivo/commit/8f22f893ac230090b188e896a06fdf632b157a2c))

#### Bug Fixes

* **bar:**  fix BarItem label prop type ([682cbed0](https://github.com/plouc/nivo/commit/682cbed01babb4773568eb590463c22dfd0b5762))
* **line:**  fix LineSlices id prop type ([6f229b90](https://github.com/plouc/nivo/commit/6f229b90879c9c042c07e387b5999afdaa727442))



<a name="v0.42.0"></a>
## v0.42.0 (2023-07-31)


#### Features

* **pie:**
  *  improve pie components ([eb14f0cb](https://github.com/plouc/nivo/commit/eb14f0cb165b72ed1e2e19c2c03ce68cc4e4d8de))
  *  cleanup website PieCanvas demo ([31ef9e53](https://github.com/plouc/nivo/commit/31ef9e5371b508181d9dbf2a28d104f540973b2d))
  *  init support for start/end angle + PieCanvas ([52f6a9e1](https://github.com/plouc/nivo/commit/52f6a9e140937d8407cfe0af2c98749a514a5fad))
* **website:**  upgrade nivo packages ([d6eefa30](https://github.com/plouc/nivo/commit/d6eefa300d5ddaddc1e8ba0c13097670bf5269d4))



<a name="v0.41.0"></a>
## v0.41.0 (2023-07-31)


#### Features

* **sankey:**
  *  add TypeScript definitions ([c2a9d38b](https://github.com/plouc/nivo/commit/c2a9d38b20ee1ce30b0c2a8e0d9fb30d0f8b3534))
  *  add gradient & blend mode support for links ([27d56050](https://github.com/plouc/nivo/commit/27d56050a0ad98d2504275900daccdf25627598e))
* **website:**  upgrade nivo packages ([cf62e33d](https://github.com/plouc/nivo/commit/cf62e33d70943ade584b807cad3385fd16872fbd))



<a name="v0.40.0"></a>
## v0.40.0 (2023-07-31)


#### Bug Fixes

* **pie:**  fix code formatting ([1f9cf69e](https://github.com/plouc/nivo/commit/1f9cf69e823d085345c6cb5d36b8233e18698f9d))
* **waffle:**  remove self import from TypeScript def ([867a545a](https://github.com/plouc/nivo/commit/867a545aba2ffb6110e226c2490572011049c895))

#### Features

* **bar:**  include TypeScript definition in package ([0d221c74](https://github.com/plouc/nivo/commit/0d221c747d34ba6031b3dae6e4a9d0c20821b9ca))
* **heatmap:**  include TypeScript definition in package ([868620eb](https://github.com/plouc/nivo/commit/868620eb2642aff5abbdac2dabb826a6b0f199dc))
* **pie:**
  *  add support for custom tooltip ([d3734428](https://github.com/plouc/nivo/commit/d3734428cee364f4eb67af5c0f4c572b9973dc31))
  *  include TypeScript definition in package ([04fc931e](https://github.com/plouc/nivo/commit/04fc931e032710fe245e4327eb525af15cde3c74))
* **radar:**  add ability to define max value ([880d7299](https://github.com/plouc/nivo/commit/880d7299c85ee7a151105773b4cd2d7566649f9f))
* **website:**  upgrade nivo packages ([8dadeead](https://github.com/plouc/nivo/commit/8dadeeadca3e29b4ab86226602afdc64609477f6))



<a name="v0.39.0"></a>
## v0.39.0 (2023-07-31)


#### Features

* **waffle:**  add waffle package (#202) ([aceafc48](https://github.com/plouc/nivo/commit/aceafc489465f82be140b997cf950875baafc55d))



<a name="v0.38.0"></a>
## v0.38.0 (2023-07-31)


#### Features

* **heatmap:**  init TypeScript definitions (#198) ([6c5432db](https://github.com/plouc/nivo/commit/6c5432db7b1420bad94f6d7afe2931a67f6c7e0e))
* **pie:**  add TypeScript Definitions for Pie component ([0def4c31](https://github.com/plouc/nivo/commit/0def4c3141c869e309366730c26c28070ec143e6))
* **tooltips:**  add support for custom tooltips for bubble charts and treemaps (#200) ([092f3e0c](https://github.com/plouc/nivo/commit/092f3e0c5253d2ca66ce53b028c918953c08f97d))
* **website:**
  *  fix treemap source code for treemap components ([b97c07b8](https://github.com/plouc/nivo/commit/b97c07b8c53e66f64265662e832dedc4446df067))
  *  restore scrol position when pathname changes ([49b7ffca](https://github.com/plouc/nivo/commit/49b7ffcae859b57b2a7fac1d041755972ec242cb))
  *  use BrowserRouter instead of HashRouter ([a360e444](https://github.com/plouc/nivo/commit/a360e444f63944914456e6aab9f8c2819a2ec238))
  *  upgrade nivo packages ([69deaa17](https://github.com/plouc/nivo/commit/69deaa17a9634e9a31f7fcbf36dcafa2cbfa1a08))



<a name="v0.37.0"></a>
## v0.37.0 (2023-07-31)


#### Features

* **heatmap:**  add support for onClick event ([52d077c7](https://github.com/plouc/nivo/commit/52d077c718f3ca039737de13a19920625e9effde))
* **website:**  upgrade nivo packages ([5f416e9a](https://github.com/plouc/nivo/commit/5f416e9ac0a20e44ad9bf63c0fdbc6d285706966))



<a name="v0.36.0"></a>
## v0.36.0 (2023-07-31)


#### Features

* **bar:**  improve custom tooltip support ([5816555e](https://github.com/plouc/nivo/commit/5816555e73021d91d8af32a4b972c2738f58c1c6))
* **tooltips:**  add support for configurable tooltips for bar charts and heat maps (#159) ([82473c10](https://github.com/plouc/nivo/commit/82473c10553e976b6e9d14c9e51d4093a3af510c))
* **website:**  upgrade nivo packages ([8d8374a3](https://github.com/plouc/nivo/commit/8d8374a3dcd5d532c50831bbf193e06251996a2f))



<a name="v0.35.2"></a>
## v0.35.2 (2023-07-31)


#### Features

* **website:**  upgrade nivo packages ([66a7208c](https://github.com/plouc/nivo/commit/66a7208c577b74e30ba01fb986e1b4bdb7a5bdb5))

#### Bug Fixes

* **lodash:**  add missing deps & use scoped imports ([f04660f2](https://github.com/plouc/nivo/commit/f04660f2ff1cd965b0a9d2609782e0409cb486d5))



<a name="v0.35.1"></a>
## v0.35.1 (2023-07-31)


#### Bug Fixes

* **generators:**  use modules ([9cec118c](https://github.com/plouc/nivo/commit/9cec118c0024af202a9fe24e94715916e1088069))



<a name="v0.35.0"></a>
## v0.35.0 (2023-07-31)


#### Bug Fixes

* **deps:**  do not ignore yarn.lock ([1a60cfb8](https://github.com/plouc/nivo/commit/1a60cfb84ccc17ee933866e3c573d03546e6c066))
* **scripts:**  fix make targets documentation ([48d87ec2](https://github.com/plouc/nivo/commit/48d87ec2a62b2e5bcd61110c132b8863776ceebb))
* **security:**  Upgrade transitive hoek dep ([50d6fd52](https://github.com/plouc/nivo/commit/50d6fd521150098093c2d633efed8116fa63a0c2))
* **storybook:**  fix storybook packages import ([d3abafdc](https://github.com/plouc/nivo/commit/d3abafdcaf612df8602c961e63e2c1d7a22fb94b))
* **website:**  fix website Stream example code (#188) ([129572e6](https://github.com/plouc/nivo/commit/129572e621b7e6b246b61a0a7cccdb484bd5d31f))

#### Features

* **ci:**  update travis config ([25e4cdca](https://github.com/plouc/nivo/commit/25e4cdca8cfb92d584512af03c728828b52b5b30))
* **deps:**  use yarn with lerna & add missing yarn.lock files ([42675e47](https://github.com/plouc/nivo/commit/42675e47042d4bacf2edb3860f66a5a1971079e3))
* **legends:**  add default text color + canvas support for text color ([20a30ab8](https://github.com/plouc/nivo/commit/20a30ab8a795d359b6e6b1eeb0a2194780c4cb20))
* **lint:**  centralize lint command & config ([e8e38da4](https://github.com/plouc/nivo/commit/e8e38da4a0f20e0a9f07606ab36853fdab4d44ed))
* **packages:**  use rollup for packages build ([f24cb08d](https://github.com/plouc/nivo/commit/f24cb08d8a8eb2feecb858fb41875ac99b782db0))
* **pie:**  add support for onClick event ([b171044e](https://github.com/plouc/nivo/commit/b171044e25e25297e0f3714b5121dd24c21d86f8))
* **react:**  nivo now require react >= 16.2.0 < 17.0.0 ([f64d3ef6](https://github.com/plouc/nivo/commit/f64d3ef6026438e4af29f436b27c46f00f9feae7))
* **stack:**  make line areas stack in front of each other visibly #152 ([8ec91a66](https://github.com/plouc/nivo/commit/8ec91a66e3c3140c9176b52384a4603582545930))
* **tests:**  centralize test command & dependencies ([eda819ca](https://github.com/plouc/nivo/commit/eda819ca03f3abfae50a5f21a9f7a8af5dcb562c))
* **website:**
  *  improve chart tabs ([2c2265f5](https://github.com/plouc/nivo/commit/2c2265f5671b82997515ea26c978b575e86dd3e7))
  *  upgrade @nivo packages ([71e1c4b0](https://github.com/plouc/nivo/commit/71e1c4b039feb6ef7cc9e4378a30f3a5018d6781))



<a name="v0.33.0"></a>
## v0.33.0 (2023-07-31)


#### Features

* **api:**  remove empty api package ([dd47b293](https://github.com/plouc/nivo/commit/dd47b293edcb07a6ed23cd0a26e29c4352ecfb3d))
* **bar:**  add support for legends on Bar component ([6f22a4ab](https://github.com/plouc/nivo/commit/6f22a4ab3fe02a210d686153ea7f587d302102ff))
* **calendar:**  add support for legends on Calendar component ([6ef9dc20](https://github.com/plouc/nivo/commit/6ef9dc20a0462e3279a50ab130bbe2902a6a85e5))
* **chord:**
  *  add support for legends on Chord component ([39212ef4](https://github.com/plouc/nivo/commit/39212ef4b5516cae43b4a5a3fd7ce40d15482e1a))
  *  add source code for chord stories ([489f36fc](https://github.com/plouc/nivo/commit/489f36fc534c464a9ce234d5eb7c0183d1e5441e))
* **commands:**  sort Makefile help ([4f7a872c](https://github.com/plouc/nivo/commit/4f7a872cb54c835235e0804482b516a24461e290))
* **dev:**  add commands to list/rm currently linked packages for website ([df1d3085](https://github.com/plouc/nivo/commit/df1d3085e7214786948e0f9edcfaaf05327ef566))
* **examples:**
  *  ensure examples build successfully on CI ([2ad46b7a](https://github.com/plouc/nivo/commit/2ad46b7af65fdcb7a3bb63d76327e3742e846776))
  * fix retro example dependencies ([2c84d014](https://github.com/plouc/nivo/commit/2c84d014c0ad88d1574f8ec5552cd837316a4371))
* **legends:**  init legends package ([4063428b](https://github.com/plouc/nivo/commit/4063428baa626dd2e0810b830ca4cf6e5cde3b5a))
* **line:**  add support for legends on Line component ([b7cc2449](https://github.com/plouc/nivo/commit/b7cc2449dc068e53e1449e7c04f09af7ebe8c624))
* **linting:**  add eslint on several packages ([38ba981d](https://github.com/plouc/nivo/commit/38ba981d5c2a1411367ca326c7b449a9685135ea))
* **pie:**  add support for legends on Pie component ([8c3004be](https://github.com/plouc/nivo/commit/8c3004bea9ca8e9315f4ce8c8c37e697a20db7a2))
* **publish:**  add packages build prior to publish ([c6f9810b](https://github.com/plouc/nivo/commit/c6f9810b69c776ad0f193eb3ac28e64b7fe05422))
* **radar:**  add support for legends on Radar component ([8d53e13b](https://github.com/plouc/nivo/commit/8d53e13bb5b5f54b6fbfecbc453f7c5245337a03))
* **sankey:**  add support for legends on Sankey component ([0082fb98](https://github.com/plouc/nivo/commit/0082fb98a6e310ee15ebafb8f220133c8466e7f3))
* **scatterplot:**
  *  add tests and stories ([bbc03444](https://github.com/plouc/nivo/commit/bbc03444a1ecc69a49273c695bb37b53473fc6af))
  *  add support for tooltips on ScatterPlotCanvas ([42a17314](https://github.com/plouc/nivo/commit/42a17314fe299f14a0e2eee3a84e492da1d9099b))
  *  add scatterplot package ([52fab5f9](https://github.com/plouc/nivo/commit/52fab5f98dcda403df46dc2565b8f7bfd4863472))
* **stream:**  add support for legends on Stream component ([79395355](https://github.com/plouc/nivo/commit/79395355ec117fb1dc10b567ea4373be11507126))
* **website:**
  *  upgrade @nivo packages ([2da761d8](https://github.com/plouc/nivo/commit/2da761d871348d1edfcadd46d91d214b77092fbb))
  *  upgrade @nivo packages ([4b60e426](https://github.com/plouc/nivo/commit/4b60e4262ec5188ec7dbf4c0b4565c10dfd25b20))
  *  upgrade @nivo packages ([429bd5f0](https://github.com/plouc/nivo/commit/429bd5f00dbb45301af606acecf24cde664b98da))
  *  upgrade website @nivo packages ([81adc8d0](https://github.com/plouc/nivo/commit/81adc8d057d5f770c5228ddf1450c4d77ac3e7bd))

#### Bug Fixes

* **chord:**  fix broken imports ([252efc0f](https://github.com/plouc/nivo/commit/252efc0f0a6694af0191b951bca3a7f93c0aef7a))
* **readme:**  fix misleading installation instructions ([0a5120f7](https://github.com/plouc/nivo/commit/0a5120f7665b13e51fcba335574fc1701cce2ff9))



<a name="v0.32.0"></a>
## v0.32.0 (2023-07-31)




