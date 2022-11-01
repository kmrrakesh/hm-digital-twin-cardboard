import { BrowserRouter as Router } from "react-router-dom";
import '@microsoft/iot-cardboard-js/themes.css';
import MainPanel from "./components/MainPanel";
import { Nav } from './components/Nav';
import { useEffect, useState, useRef } from 'react';
import Navigation from './data/Navigation';
import { ADT3DSceneAdapter } from '@microsoft/iot-cardboard-js';
import React from 'react';
import AppMsalAuthService from './services/AppMsalAuthService';
import Settings from "./AuthConfig"
import { initializeIcons, loadTheme } from '@fluentui/react';
import { Environment } from "./Environment";

export interface IApplicationContext {
  AuthService: AppMsalAuthService;
  ADT3DSceneAdapter: ADT3DSceneAdapter;
  config: any;
}

const authentication = new AppMsalAuthService(Settings);

export const ApplicationContext = React.createContext<IApplicationContext>(null);

function App() {
  const [navItems] = useState(Navigation);
  const [refreshConfig, setRefreshConfig] = useState(true);
  const [config, setConfig] = useState(null);
  const adapterRef = useRef<ADT3DSceneAdapter>(
    new ADT3DSceneAdapter(authentication, Environment.AdtHost(), Environment.BlobUrl()));
  
  useEffect(() => {
    initializeIcons();
    loadTheme({ palette: { themePrimary: '#F60045', themeDarkAlt: '#106EBE' }, semanticColors: {buttonBackground: 'white'} });
  }, []);

  useEffect(() => {
    if (refreshConfig) {
      adapterRef.current.getScenesConfig().then((result) => {
        console.log("Rakesh");
        console.log(result);
        // let blobConfig: any = result.result?.data;
        // if (!blobConfig) {
        //   if (window.location.href.indexOf('/builder') === -1) {
        //     window.location.href = '/builder';
        //   }
        //   return;
        // }

        setConfig({
            "$schema": "https://github.com/microsoft/iot-cardboard-js/tree/main/schemas/3DScenesConfiguration/v1.0.0/3DScenesConfiguration.schema.json",
            "configuration": {
                "scenes": [
                    {
                        "id": "e6a9ab5a6353ebe858bfbff6b1833051",
                        "displayName": "Building",
                        "description": "Building light system",
                        "elements": [
                            {
                                "type": "TwinToObjectMapping",
                                "id": "a10d3eaf80367671c2ba09a355796d5d",
                                "displayName": "jupiter-light-sensor",
                                "primaryTwinID": "jupiter-light-sensor",
                                "objectIDs": [
                                    "representation-123273_1",
                                    "representation-124360_1",
                                    "representation-126547_1",
                                    "representation-47459_1",
                                    "representation-50118_1",
                                    "representation-53185_1",
                                    "representation-73061_1",
                                    "representation-77744_1",
                                    "representation-77744_3",
                                    "representation-81450_1",
                                    "representation-81450_3"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "1aca4313cf4fe3a575844c5259a64232",
                                "displayName": "building",
                                "primaryTwinID": "building",
                                "objectIDs": [
                                    "2sMqdqIU5BOBeQp_S3Hjru"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "d3c8e7c814aa337c5752a81533f3c997",
                                "displayName": "venus-light-sensor",
                                "primaryTwinID": "venus-light-sensor",
                                "objectIDs": [
                                    "representation-102705_1",
                                    "representation-113281_1",
                                    "representation-116558_1",
                                    "representation-120691_1",
                                    "representation-128654_1",
                                    "representation-131760_1",
                                    "representation-132834_1",
                                    "representation-187278_1",
                                    "representation-187278_3",
                                    "representation-189371_1",
                                    "representation-189371_3",
                                    "representation-99911_1"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "342b5e012e6ef95bf3187f6cb2e4656f",
                                "displayName": "mercury-light-sensor",
                                "primaryTwinID": "mercury-light-sensor",
                                "objectIDs": [
                                    "representation-134544_1",
                                    "representation-136965_1",
                                    "representation-141952_1",
                                    "representation-144079_1",
                                    "representation-156383_1",
                                    "representation-156383_3",
                                    "representation-156383_5",
                                    "representation-156383_7",
                                    "representation-160565_1",
                                    "representation-164754_1",
                                    "representation-170164_1",
                                    "representation-172585_1",
                                    "representation-179700_1"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "24aeb317db40f0d094a2436e1b645344",
                                "displayName": "meadow-light-sensor",
                                "primaryTwinID": "meadow-light-sensor",
                                "objectIDs": [
                                    "representation-339241_1",
                                    "representation-341049_1",
                                    "representation-343352_1",
                                    "representation-346858",
                                    "representation-346858_1",
                                    "representation-346858_2",
                                    "representation-346858_3",
                                    "representation-346858_4",
                                    "representation-346858_5",
                                    "representation-346858_6",
                                    "representation-346858_7",
                                    "representation-358503",
                                    "representation-359853_1",
                                    "representation-369368_1",
                                    "representation-375419_1",
                                    "representation-375419_3",
                                    "representation-377199_1",
                                    "representation-377199_3"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "a8b0a2eff4f7eaf50e8082674fab8f6c",
                                "displayName": "marshal-light-sensor",
                                "primaryTwinID": "marshal-light-sensor",
                                "objectIDs": [
                                    "representation-382714_1",
                                    "representation-383714_1",
                                    "representation-384931",
                                    "representation-385192",
                                    "representation-386209_1",
                                    "representation-389220_1",
                                    "representation-402359_1",
                                    "representation-406445",
                                    "representation-406445_1",
                                    "representation-406445_4",
                                    "representation-406445_5",
                                    "representation-406445_9",
                                    "representation-410767_1",
                                    "representation-412884_1",
                                    "representation-416452_1",
                                    "representation-482375_1",
                                    "representation-482375_3",
                                    "representation-484144_1",
                                    "representation-484144_3"
                                ]
                            }
                        ],
                        "behaviorIDs": [
                            "5e0e8418f5f5ee91fda1be9c6245c9a9",
                            "7ab5862cac312e7e8b8101de1b9bf3c7"
                        ],
                        "assets": [
                            {
                                "type": "3DAsset",
                                "url": "https://hmstore1.blob.core.windows.net/hmscene/Building.glb"
                            }
                        ]
                    },
                    {
                        "id": "c052a35698f12ec638482ba9ae4e8e58",
                        "displayName": "Primary processing facility",
                        "description": "Primary processing facility",
                        "assets": [
                            {
                                "type": "3DAsset",
                                "url": "https://hmstore1.blob.core.windows.net/hmscene/RobotArms.glb"
                            }
                        ],
                        "elements": [
                            {
                                "type": "TwinToObjectMapping",
                                "id": "e78d218d6a8a2a277cfaede4220ffe0e",
                                "displayName": "Primary Processing Facility",
                                "primaryTwinID": "phirobo1",
                                "objectIDs": [
                                    "__Table10_primitive0",
                                    "__Table11_primitive0",
                                    "__Table7_primitive0",
                                    "__Table8_primitive0",
                                    "__Table9_primitive0",
                                    "_polySurface8_primitive0"
                                ]
                            }
                        ],
                        "behaviorIDs": [
                            "29a0632c45c0345d7e0664d160591dd6",
                            "bfd93b203abdadfb6f1deea620142a2c"
                        ]
                    },
                    {
                        "id": "7e92c87acac4436ad5c9262d41fa610a",
                        "displayName": "Refinery",
                        "description": "Refinery digital twin",
                        "assets": [
                            {
                                "type": "3DAsset",
                                "url": "https://hmstore1.blob.core.windows.net/hmscene/Refinery.glb"
                            }
                        ],
                        "elements": [
                            {
                                "type": "TwinToObjectMapping",
                                "id": "c2c9ae0471a490e29b7ac99df96b16c7",
                                "displayName": "refinery digital twin",
                                "primaryTwinID": "refinery",
                                "objectIDs": [
                                    "pCube1_LOD1"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "56978b6e4a789dd48c7877680ca04a6f",
                                "displayName": "east  tank",
                                "primaryTwinID": "east",
                                "objectIDs": [
                                    "MODULE_SILOS_02_LOD1"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "c784a1d96686faab15a3cdf51c45e79d",
                                "displayName": "north tank",
                                "primaryTwinID": "north",
                                "objectIDs": [
                                    "MODULE_SILOS_178_LOD1"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "30ec1a2849945797207e40e5ced1c8ef",
                                "displayName": "south tank",
                                "primaryTwinID": "south",
                                "objectIDs": [
                                    "MODULE_SILOS_530_LOD1"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "e4189289b7101dc3b3e8558cb10aab03",
                                "displayName": "west tank",
                                "primaryTwinID": "west",
                                "objectIDs": [
                                    "MODULE_SILOS_354_LOD1"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "c1c977014100634bce40e3ac04714e36",
                                "displayName": "primary warehouse",
                                "primaryTwinID": "phi",
                                "objectIDs": [
                                    "WAREHOUSE_EXT2_002_LOD1_002"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "b02c8b5e5ebc4b098c8b707634455ee7",
                                "displayName": "psi",
                                "primaryTwinID": "psi",
                                "objectIDs": [
                                    "WAREHOUSE_EXT2_001_LOD1_002"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "b207f678ae2c96a8535d729228a4c660",
                                "displayName": "chi",
                                "primaryTwinID": "chi",
                                "objectIDs": [
                                    "WAREHOUSE_EXT1_001_LOD1_002"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "c6a82742004a19d63b38d10b37fee294",
                                "displayName": "alpha distillary",
                                "primaryTwinID": "alpha",
                                "objectIDs": [
                                    "MODULE_TOWER_514_LOD1_001"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "b28029739c4e9c1bee742c1c9cfea95b",
                                "displayName": "beta distillary",
                                "primaryTwinID": "beta",
                                "objectIDs": [
                                    "MODULE_FACTORY_LOD1_001"
                                ]
                            },
                            {
                                "type": "TwinToObjectMapping",
                                "id": "6feb63231df18ee1c0649b01196588cd",
                                "displayName": "gamma distillary",
                                "primaryTwinID": "gamma",
                                "objectIDs": [
                                    "MODULE_TOWER_770_LOD1_001"
                                ]
                            }
                        ],
                        "behaviorIDs": [
                            "9182b7df9eac775440958966cfaa5011",
                            "4f1baf34525dd4c64fc858becfde85a7",
                            "1adcc01eecfe29606b87e9735b0e12d1"
                        ]
                    },
                    {
                        "id": "6100e711f0735a373fb60cf09c30d12f",
                        "displayName": "Secondary processing facility",
                        "description": "Secondary processing facility",
                        "assets": [
                            {
                                "type": "3DAsset",
                                "url": "https://hmstore1.blob.core.windows.net/hmscene/RobotArms.glb"
                            }
                        ],
                        "elements": [
                            {
                                "type": "TwinToObjectMapping",
                                "id": "466523d1e5ac284feee2f5d96e928e9a",
                                "displayName": "Secondary Processing Facility",
                                "primaryTwinID": "psirobo1",
                                "objectIDs": [
                                    "__Table10_primitive0",
                                    "__Table11_primitive0",
                                    "__Table7_primitive0",
                                    "__Table8_primitive0",
                                    "__Table9_primitive0",
                                    "_polySurface8_primitive0",
                                    "_polySurface8_primitive4"
                                ]
                            }
                        ],
                        "behaviorIDs": [
                            "29a0632c45c0345d7e0664d160591dd6",
                            "bfd93b203abdadfb6f1deea620142a2c"
                        ]
                    },
                    {
                        "id": "091bd68b4eb0bc491fece79ed2fdbf67",
                        "displayName": "Tertiary processing facility",
                        "description": "Tertiary processing facility",
                        "assets": [
                            {
                                "type": "3DAsset",
                                "url": "https://hmstore1.blob.core.windows.net/hmscene/RobotArms.glb"
                            }
                        ],
                        "elements": [
                            {
                                "type": "TwinToObjectMapping",
                                "id": "e43ce43286144ea7de89b09d984097b1",
                                "displayName": "chirobo1",
                                "primaryTwinID": "chirobo1",
                                "objectIDs": [
                                    "__Table10_primitive0",
                                    "__Table11_primitive0",
                                    "__Table7_primitive0",
                                    "__Table8_primitive0",
                                    "__Table9_primitive0",
                                    "_polySurface8_primitive0"
                                ]
                            }
                        ],
                        "behaviorIDs": [
                            "29a0632c45c0345d7e0664d160591dd6",
                            "bfd93b203abdadfb6f1deea620142a2c"
                        ]
                    },
                    {
                        "id": "3bdbbfc4aa82325c9c21b288c5b9969d",
                        "displayName": "Legacy IoT",
                        "description": "Legacy IoT",
                        "elements": [
                            {
                                "type": "TwinToObjectMapping",
                                "id": "f948613d49dc4e732d29e2ee534bf627",
                                "displayName": "legacy-iot-sensor",
                                "primaryTwinID": "legacy-iot-sensor",
                                "objectIDs": [
                                    "__Table10_primitive0",
                                    "__Table11_primitive0",
                                    "__Table7_primitive0",
                                    "__Table8_primitive0",
                                    "__Table9_primitive0",
                                    "_polySurface8_primitive0"
                                ]
                            }
                        ],
                        "behaviorIDs": [
                            "c9c34d29979e994b14b042ecc44c8de4",
                            "9182b7df9eac775440958966cfaa5011"
                        ],
                        "assets": [
                            {
                                "type": "3DAsset",
                                "url": "https://hmstore1.blob.core.windows.net/hmscene/RobotArms.glb"
                            }
                        ]
                    }
                ],
                "behaviors": [
                    {
                        "id": "9182b7df9eac775440958966cfaa5011",
                        "displayName": "High Temperature",
                        "datasources": [
                            {
                                "type": "ElementTwinToObjectMappingDataSource",
                                "elementIDs": [
                                    "c6a82742004a19d63b38d10b37fee294",
                                    "b28029739c4e9c1bee742c1c9cfea95b",
                                    "6feb63231df18ee1c0649b01196588cd"
                                ]
                            }
                        ],
                        "visuals": [
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "NumericRange",
                                "valueExpression": "PrimaryTwin.Temperature || PrimaryTwin.temperature",
                                "valueRanges": [
                                    {
                                        "values": [
                                            0,
                                            350
                                        ],
                                        "visual": {
                                            "color": "#33A1FD"
                                        },
                                        "id": "3c9133ff1354163c931e27e8caed54db"
                                    },
                                    {
                                        "values": [
                                            350,
                                            360
                                        ],
                                        "visual": {
                                            "color": "#F79824"
                                        },
                                        "id": "a9961dfb1a594f85b004c99f84704fc8"
                                    },
                                    {
                                        "values": [
                                            360,
                                            "Infinity"
                                        ],
                                        "visual": {
                                            "color": "#C32F27"
                                        },
                                        "id": "1d21a24fe3d4ff969182c03b1c7c1521"
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "768cf8c0e23c40699821da544c50cffb",
                                "valueRangeType": "integer"
                            },
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "CategoricalValues",
                                "valueExpression": "PrimaryTwin.Temperature > 360 || PrimaryTwin.temperature > 360",
                                "valueRanges": [
                                    {
                                        "id": "c046635c19a2af61e7b9be0e9255aafb",
                                        "values": [
                                            true
                                        ],
                                        "visual": {
                                            "color": "#C32F27",
                                            "iconName": "Ringer",
                                            "labelExpression": "`${PrimaryTwin.$dtId} requires maintenance`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "8594355c6061442282deacce19c49abd",
                                "valueRangeType": "boolean"
                            },
                            {
                                "type": "Popover",
                                "title": "",
                                "widgets": [
                                    {
                                        "id": "0c199af9f90e0b91408cce56a150a5ab",
                                        "type": "Link",
                                        "widgetConfiguration": {
                                            "label": "Action",
                                            "linkExpression": "`https://hm-dt-fun-app.azurewebsites.net/api/ResetTelemetryAsync?twinId=${PrimaryTwin.$dtId}&commandType=distillation`"
                                        }
                                    },
                                    {
                                        "id": "0450f67016e3f3025fb1ecdfe43241a4",
                                        "type": "Gauge",
                                        "valueExpression": "PrimaryTwin.Temperature",
                                        "widgetConfiguration": {
                                            "label": "Temperature",
                                            "valueRanges": [
                                                {
                                                    "values": [
                                                        0,
                                                        350
                                                    ],
                                                    "visual": {
                                                        "color": "#33A1FD"
                                                    },
                                                    "id": "e0aa620aaafce5307b7beddd68aeaa58"
                                                },
                                                {
                                                    "values": [
                                                        350,
                                                        360
                                                    ],
                                                    "visual": {
                                                        "color": "#26C485"
                                                    },
                                                    "id": "061870a838bf932a9fc692dffea0a417"
                                                },
                                                {
                                                    "values": [
                                                        360,
                                                        "Infinity"
                                                    ],
                                                    "visual": {
                                                        "color": "#C32F27"
                                                    },
                                                    "id": "08f75073c58dc16a5650d48f1539d193"
                                                }
                                            ],
                                            "units": "°F"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "meshIDs"
                                }
                            }
                        ]
                    },
                    {
                        "id": "4f1baf34525dd4c64fc858becfde85a7",
                        "displayName": "High Emissions",
                        "datasources": [
                            {
                                "type": "ElementTwinToObjectMappingDataSource",
                                "elementIDs": [
                                    "56978b6e4a789dd48c7877680ca04a6f",
                                    "c784a1d96686faab15a3cdf51c45e79d",
                                    "30ec1a2849945797207e40e5ced1c8ef",
                                    "e4189289b7101dc3b3e8558cb10aab03"
                                ]
                            }
                        ],
                        "visuals": [
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "NumericRange",
                                "valueExpression": "PrimaryTwin.FuelConsumption",
                                "valueRanges": [
                                    {
                                        "values": [
                                            0,
                                            5
                                        ],
                                        "visual": {
                                            "color": "#F79824"
                                        },
                                        "id": "818a5b16f258a663c959e7d63a6c6dda"
                                    },
                                    {
                                        "values": [
                                            5,
                                            11
                                        ],
                                        "visual": {
                                            "color": "#26C485"
                                        },
                                        "id": "834528a39f168b93547cf6c1e3e0c995"
                                    },
                                    {
                                        "values": [
                                            11,
                                            "Infinity"
                                        ],
                                        "visual": {
                                            "color": "#C32F27"
                                        },
                                        "id": "c7e939761659a6ec2676a756aadf8394"
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "4b6c8208031247da873a8a40304bd610",
                                "valueRangeType": "integer"
                            },
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "CategoricalValues",
                                "valueExpression": "PrimaryTwin.FuelConsumption > 10.9",
                                "valueRanges": [
                                    {
                                        "id": "609826c8a3532e63636f6a1dd6f1c547",
                                        "values": [
                                            true
                                        ],
                                        "visual": {
                                            "color": "#C32F27",
                                            "iconName": "Ringer",
                                            "labelExpression": "`Excess methane production`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "8464d83260844e468d638c2f6642ffcd",
                                "valueRangeType": "boolean"
                            },
                            {
                                "type": "Popover",
                                "title": "",
                                "widgets": [
                                    {
                                        "id": "e8236fd479bb5736bfb1f15cf552b30a",
                                        "type": "Gauge",
                                        "valueExpression": "PrimaryTwin.FuelConsumption",
                                        "widgetConfiguration": {
                                            "label": "Fuel Consumption",
                                            "valueRanges": [
                                                {
                                                    "values": [
                                                        0,
                                                        5
                                                    ],
                                                    "visual": {
                                                        "color": "#26C485"
                                                    },
                                                    "id": "bcd89dcd21e8700585c7d13c75ba08f9"
                                                },
                                                {
                                                    "values": [
                                                        5,
                                                        11
                                                    ],
                                                    "visual": {
                                                        "color": "#F79824"
                                                    },
                                                    "id": "715c85a3286fda7ca2365f7335f7db12"
                                                },
                                                {
                                                    "values": [
                                                        11,
                                                        "Infinity"
                                                    ],
                                                    "visual": {
                                                        "color": "#C32F27"
                                                    },
                                                    "id": "3cab1d0f6cfbde5551c12b967d0636ac"
                                                }
                                            ],
                                            "units": "mbd"
                                        }
                                    },
                                    {
                                        "id": "49a62c5051b8b8f0c923b188309b7fa5",
                                        "type": "Link",
                                        "widgetConfiguration": {
                                            "label": "Action",
                                            "linkExpression": "`https://hm-dt-fun-app.azurewebsites.net/api/ResetTelemetryAsync?twinId=${PrimaryTwin.$dtId}&commandType=tank`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "meshIDs"
                                }
                            }
                        ]
                    },
                    {
                        "id": "1adcc01eecfe29606b87e9735b0e12d1",
                        "displayName": "Processing Facility",
                        "datasources": [
                            {
                                "type": "ElementTwinToObjectMappingDataSource",
                                "elementIDs": [
                                    "c1c977014100634bce40e3ac04714e36",
                                    "b02c8b5e5ebc4b098c8b707634455ee7",
                                    "b207f678ae2c96a8535d729228a4c660"
                                ]
                            }
                        ],
                        "visuals": [
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "NumericRange",
                                "valueExpression": "PrimaryTwin.Outflow",
                                "valueRanges": [
                                    {
                                        "values": [
                                            0,
                                            30
                                        ],
                                        "visual": {
                                            "color": "#26C485"
                                        },
                                        "id": "227779c450007afb5a702c81b0307809"
                                    },
                                    {
                                        "values": [
                                            30,
                                            50
                                        ],
                                        "visual": {
                                            "color": "#F79824"
                                        },
                                        "id": "6ff19cd8ec35d16b5559558ae56c8e28"
                                    },
                                    {
                                        "values": [
                                            50,
                                            "Infinity"
                                        ],
                                        "visual": {
                                            "color": "#C32F27"
                                        },
                                        "id": "a70ee80ef6a4800bb7554ba1700b7f0d"
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "34167f63a5c548acb972a539d4654e47",
                                "valueRangeType": "integer"
                            },
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "CategoricalValues",
                                "valueExpression": "PrimaryTwin.Outflow > 50",
                                "valueRanges": [
                                    {
                                        "id": "a4682875df6c8ac605aea1c9f481cf54",
                                        "values": [
                                            true
                                        ],
                                        "visual": {
                                            "color": "#C32F27",
                                            "iconName": "Ringer",
                                            "labelExpression": "`High out-flow detected at processing facility ${PrimaryTwin.$dtId}`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "4093270fbe6a47d58ad6cb819423e661",
                                "valueRangeType": "boolean"
                            },
                            {
                                "type": "Popover",
                                "title": "",
                                "widgets": [
                                    {
                                        "id": "2578a8c0a5c956152b45acc950c200a2",
                                        "type": "Gauge",
                                        "valueExpression": "PrimaryTwin.Outflow",
                                        "widgetConfiguration": {
                                            "label": "Warehouse",
                                            "valueRanges": [
                                                {
                                                    "values": [
                                                        0,
                                                        30
                                                    ],
                                                    "visual": {
                                                        "color": "#26C485"
                                                    },
                                                    "id": "bbd6ec1907c44093a2509258bb34a72a"
                                                },
                                                {
                                                    "values": [
                                                        30,
                                                        50
                                                    ],
                                                    "visual": {
                                                        "color": "#F79824"
                                                    },
                                                    "id": "28384cf097831e99836b474e3749ca90"
                                                },
                                                {
                                                    "values": [
                                                        50,
                                                        "Infinity"
                                                    ],
                                                    "visual": {
                                                        "color": "#C32F27"
                                                    },
                                                    "id": "6127f5361beab33acb90483f5c899cd5"
                                                }
                                            ],
                                            "units": "mbd"
                                        }
                                    },
                                    {
                                        "id": "95efa5f36981f99ca3034b55bce4251c",
                                        "type": "Link",
                                        "widgetConfiguration": {
                                            "label": "Action",
                                            "linkExpression": "`https://hm-dt-fun-app.azurewebsites.net/api/ResetTelemetryAsync?twinId=${PrimaryTwin.$dtId}&commandType=warehouse`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "meshIDs"
                                }
                            }
                        ]
                    },
                    {
                        "id": "29a0632c45c0345d7e0664d160591dd6",
                        "displayName": "In-flow",
                        "datasources": [
                            {
                                "type": "ElementTwinToObjectMappingDataSource",
                                "elementIDs": [
                                    "e78d218d6a8a2a277cfaede4220ffe0e",
                                    "466523d1e5ac284feee2f5d96e928e9a",
                                    "e43ce43286144ea7de89b09d984097b1"
                                ]
                            }
                        ],
                        "visuals": [
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "NumericRange",
                                "valueExpression": "PrimaryTwin.Inflow",
                                "valueRanges": [
                                    {
                                        "values": [
                                            0,
                                            30
                                        ],
                                        "visual": {
                                            "color": "#26C485"
                                        },
                                        "id": "67a28317140fc024192f0f13ea1c2678"
                                    },
                                    {
                                        "values": [
                                            30,
                                            50
                                        ],
                                        "visual": {
                                            "color": "#F79824"
                                        },
                                        "id": "b48d1aa3eedd33460742af5e457e16b0"
                                    },
                                    {
                                        "values": [
                                            50,
                                            "Infinity"
                                        ],
                                        "visual": {
                                            "color": "#C32F27"
                                        },
                                        "id": "1202ccacafb2057c57bd1450c503bab6"
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "303a4a704d204f76833f1f0cb94fb3e0",
                                "valueRangeType": "integer"
                            },
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "CategoricalValues",
                                "valueExpression": "PrimaryTwin.Inflow > 49",
                                "valueRanges": [
                                    {
                                        "id": "d956d13537ce27886eabce224653a9c2",
                                        "values": [
                                            true
                                        ],
                                        "visual": {
                                            "color": "#C32F27",
                                            "iconName": "Ringer",
                                            "labelExpression": "`High in-flow at ${PrimaryTwin.$dtId}`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "ebebb044d39643a8987c5991535c7c5f",
                                "valueRangeType": "boolean"
                            },
                            {
                                "type": "Popover",
                                "title": "",
                                "widgets": [
                                    {
                                        "id": "4a2761a7e010f8f7ca8f06c25965c596",
                                        "type": "Gauge",
                                        "valueExpression": "PrimaryTwin.Inflow",
                                        "widgetConfiguration": {
                                            "label": "In-flow status",
                                            "valueRanges": [
                                                {
                                                    "values": [
                                                        0,
                                                        30
                                                    ],
                                                    "visual": {
                                                        "color": "#26C485"
                                                    },
                                                    "id": "c2c8dd4445877e4dd9ae491fa8e67330"
                                                },
                                                {
                                                    "values": [
                                                        30,
                                                        50
                                                    ],
                                                    "visual": {
                                                        "color": "#F79824"
                                                    },
                                                    "id": "4f6cef0a97445c60a456fb1afaf47fd4"
                                                },
                                                {
                                                    "values": [
                                                        50,
                                                        "Infinity"
                                                    ],
                                                    "visual": {
                                                        "color": "#C32F27"
                                                    },
                                                    "id": "00544454b6f31ffb68c740d3df4d90f3"
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "meshIDs"
                                }
                            }
                        ]
                    },
                    {
                        "id": "bfd93b203abdadfb6f1deea620142a2c",
                        "displayName": "Out-flow",
                        "datasources": [
                            {
                                "type": "ElementTwinToObjectMappingDataSource",
                                "elementIDs": [
                                    "e78d218d6a8a2a277cfaede4220ffe0e",
                                    "466523d1e5ac284feee2f5d96e928e9a",
                                    "e43ce43286144ea7de89b09d984097b1"
                                ]
                            }
                        ],
                        "visuals": [
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "NumericRange",
                                "valueExpression": "PrimaryTwin.Outflow",
                                "valueRanges": [
                                    {
                                        "values": [
                                            0,
                                            30
                                        ],
                                        "visual": {
                                            "color": "#26C485"
                                        },
                                        "id": "c67a826f7603966e54586caeb207da24"
                                    },
                                    {
                                        "values": [
                                            30,
                                            50
                                        ],
                                        "visual": {
                                            "color": "#F79824"
                                        },
                                        "id": "ec297b31147802b7aa925967353c6d88"
                                    },
                                    {
                                        "values": [
                                            50,
                                            "Infinity"
                                        ],
                                        "visual": {
                                            "color": "#C32F27"
                                        },
                                        "id": "2134a87b945617488a40cc4f64c42610"
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "df4bd7f86d2941cea30ae53e49d9ecbc",
                                "valueRangeType": "integer"
                            },
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "CategoricalValues",
                                "valueExpression": "PrimaryTwin.Outflow > 49",
                                "valueRanges": [
                                    {
                                        "id": "5e96ee738315f4d265b37c0d1be32026",
                                        "values": [
                                            true
                                        ],
                                        "visual": {
                                            "color": "#C32F27",
                                            "iconName": "Ringer",
                                            "labelExpression": "`High out-flow detected at ${PrimaryTwin.$dtId}`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "ad0a808f8c2c41ed9d2a8a8d3c269142",
                                "valueRangeType": "boolean"
                            },
                            {
                                "type": "Popover",
                                "title": "",
                                "widgets": [
                                    {
                                        "id": "914046062a1bdd9930ce1c5a93124a0c",
                                        "type": "Gauge",
                                        "valueExpression": "PrimaryTwin.Outflow",
                                        "widgetConfiguration": {
                                            "label": "out-flow status",
                                            "valueRanges": [
                                                {
                                                    "values": [
                                                        0,
                                                        30
                                                    ],
                                                    "visual": {
                                                        "color": "#26C485"
                                                    },
                                                    "id": "ed87223b835604363ba0998decebb2a5"
                                                },
                                                {
                                                    "values": [
                                                        30,
                                                        50
                                                    ],
                                                    "visual": {
                                                        "color": "#F79824"
                                                    },
                                                    "id": "e1d71e2d4990124aedd5cd4b28757b44"
                                                },
                                                {
                                                    "values": [
                                                        50,
                                                        "Infinity"
                                                    ],
                                                    "visual": {
                                                        "color": "#C32F27"
                                                    },
                                                    "id": "4b3c8a460bb498bf996d07b3ea8c7c4a"
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "meshIDs"
                                }
                            }
                        ]
                    },
                    {
                        "id": "5e0e8418f5f5ee91fda1be9c6245c9a9",
                        "displayName": "CentralControl",
                        "datasources": [
                            {
                                "type": "ElementTwinToObjectMappingDataSource",
                                "elementIDs": [
                                    "1aca4313cf4fe3a575844c5259a64232"
                                ]
                            }
                        ],
                        "visuals": [
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "NumericRange",
                                "valueExpression": "1==1",
                                "valueRanges": [
                                    {
                                        "values": [
                                            0,
                                            "Infinity"
                                        ],
                                        "visual": {
                                            "color": "#33A1FD"
                                        },
                                        "id": "9a00102ffd80e4815111335e0865a2c8"
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "e9c73135b2844b148e3c607654f37d6c",
                                "valueRangeType": "integer"
                            }
                        ]
                    },
                    {
                        "id": "7ab5862cac312e7e8b8101de1b9bf3c7",
                        "displayName": "Switch",
                        "datasources": [
                            {
                                "type": "ElementTwinToObjectMappingDataSource",
                                "elementIDs": [
                                    "a10d3eaf80367671c2ba09a355796d5d",
                                    "1aca4313cf4fe3a575844c5259a64232",
                                    "d3c8e7c814aa337c5752a81533f3c997",
                                    "342b5e012e6ef95bf3187f6cb2e4656f",
                                    "24aeb317db40f0d094a2436e1b645344",
                                    "a8b0a2eff4f7eaf50e8082674fab8f6c"
                                ]
                            }
                        ],
                        "visuals": [
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "NumericRange",
                                "valueExpression": "PrimaryTwin.temperature",
                                "valueRanges": [
                                    {
                                        "values": [
                                            10,
                                            50
                                        ],
                                        "visual": {
                                            "color": "#26C485"
                                        },
                                        "id": "0afe7f66d2f98ce0e18910bb0d70f13a"
                                    },
                                    {
                                        "values": [
                                            50,
                                            75
                                        ],
                                        "visual": {
                                            "color": "#F79824"
                                        },
                                        "id": "3ad09847be0a2d45824119b55292fff2"
                                    },
                                    {
                                        "values": [
                                            75,
                                            "Infinity"
                                        ],
                                        "visual": {
                                            "color": "#C32F27"
                                        },
                                        "id": "69cb3b0cd14981c6846c8a68ad15ba88"
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "1ca5ef57767a4dae87da1b4f2a55b9f2",
                                "valueRangeType": "integer"
                            },
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "CategoricalValues",
                                "valueExpression": "PrimaryTwin.temperature > 75",
                                "valueRanges": [
                                    {
                                        "id": "fd74d2da934a47d6385213c1b0f81d48",
                                        "values": [
                                            true
                                        ],
                                        "visual": {
                                            "color": "#C32F27",
                                            "iconName": "Ringer",
                                            "labelExpression": "`High temperature detected at ${PrimaryTwin.$dtId}`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "5813c984bd6d49579052fd058e80a594",
                                "valueRangeType": "boolean"
                            },
                            {
                                "type": "Popover",
                                "title": "",
                                "widgets": [
                                    {
                                        "id": "aea735e42a22df9c64117eb2bec6b7b3",
                                        "type": "Link",
                                        "widgetConfiguration": {
                                            "label": "SwitchTheLight",
                                            "linkExpression": "`https://buildingfunctionapp.azurewebsites.net/api/SwitchTheLight?code=IKX3MHgJYQcO21dicE4GS0dRhRd71OKKhqKaP2b1qFWnAzFuzONgAw==&twinId=${PrimaryTwin.$dtId}`"
                                        }
                                    },
                                    {
                                        "id": "176bb8fb1c7cead9e2da662093546350",
                                        "type": "Gauge",
                                        "valueExpression": "PrimaryTwin.temperature",
                                        "widgetConfiguration": {
                                            "label": "Temperature",
                                            "valueRanges": [
                                                {
                                                    "values": [
                                                        0,
                                                        "Infinity"
                                                    ],
                                                    "visual": {
                                                        "color": "#33A1FD"
                                                    },
                                                    "id": "c913aa0093a9a1425de301a7001090c4"
                                                }
                                            ],
                                            "units": "°C"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "meshIDs"
                                }
                            }
                        ]
                    },
                    {
                        "id": "c9c34d29979e994b14b042ecc44c8de4",
                        "displayName": "legacy iot behaviour",
                        "datasources": [
                            {
                                "type": "ElementTwinToObjectMappingDataSource",
                                "elementIDs": [
                                    "f948613d49dc4e732d29e2ee534bf627"
                                ]
                            }
                        ],
                        "visuals": [
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "NumericRange",
                                "valueExpression": "PrimaryTwin.temperature",
                                "valueRanges": [
                                    {
                                        "values": [
                                            0,
                                            310
                                        ],
                                        "visual": {
                                            "color": "#33A1FD"
                                        },
                                        "id": "f566e8ac1d757db39506b053aa8d1534"
                                    },
                                    {
                                        "values": [
                                            311,
                                            350
                                        ],
                                        "visual": {
                                            "color": "#26C485"
                                        },
                                        "id": "9c4d8ff70b0368676acfc145750376d6"
                                    },
                                    {
                                        "values": [
                                            351,
                                            "Infinity"
                                        ],
                                        "visual": {
                                            "color": "#F79824"
                                        },
                                        "id": "0333241a502f0c0f9bfeff0250354f7a"
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "f1cbcf8a0c0b4518a07746ec67dc9f31",
                                "valueRangeType": "integer"
                            },
                            {
                                "type": "ExpressionRangeVisual",
                                "expressionType": "CategoricalValues",
                                "valueExpression": "PrimaryTwin.temperature > 351",
                                "valueRanges": [
                                    {
                                        "id": "f09d4ff32c11d55bed595f9877e0492d",
                                        "values": [
                                            true
                                        ],
                                        "visual": {
                                            "color": "#C32F27",
                                            "iconName": "Warning",
                                            "labelExpression": "`${PrimaryTwin.$dtId} high temperature`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "objectIDs"
                                },
                                "id": "0d3cd5ff3d814786bdbdea446d3113b0",
                                "valueRangeType": "boolean"
                            },
                            {
                                "type": "Popover",
                                "title": "",
                                "widgets": [
                                    {
                                        "id": "312e0e6e1d8b83d5b0b628096f233423",
                                        "type": "Gauge",
                                        "valueExpression": "PrimaryTwin.temperature",
                                        "widgetConfiguration": {
                                            "label": "Temperature",
                                            "valueRanges": [
                                                {
                                                    "values": [
                                                        0,
                                                        310
                                                    ],
                                                    "visual": {
                                                        "color": "#33A1FD"
                                                    },
                                                    "id": "3275662261baf04ed566376e43d2d6c9"
                                                },
                                                {
                                                    "values": [
                                                        311,
                                                        350
                                                    ],
                                                    "visual": {
                                                        "color": "#26C485"
                                                    },
                                                    "id": "0e9e111500b867a9120df8dc93c9da2b"
                                                },
                                                {
                                                    "values": [
                                                        351,
                                                        "Infinity"
                                                    ],
                                                    "visual": {
                                                        "color": "#C32F27"
                                                    },
                                                    "id": "2657d14108dbc54b0f06c8d4d555314a"
                                                }
                                            ],
                                            "units": "°C"
                                        }
                                    },
                                    {
                                        "id": "b9d454197774316e29ed3c461635f78c",
                                        "type": "Link",
                                        "widgetConfiguration": {
                                            "label": "Reset",
                                            "linkExpression": "`https://buildingfunctionapp.azurewebsites.net/api/InvokeLegacyIoT?code=LnKB_nW1pvFk882w-mRPWoxiWUhpRUQTFtqWTUxyqG_QAzFu3mh0Yw==&twinId=${PrimaryTwin.$dtId}`"
                                        }
                                    }
                                ],
                                "objectIDs": {
                                    "expression": "meshIDs"
                                }
                            }
                        ]
                    }
                ],
                "layers": []
            }
        });

        setRefreshConfig(false);
      }).catch((e) => {
        console.log(e);
        // if (window.location.href.indexOf('/builder') === -1) {
        //   window.location.href = '/builder';
        // }
        return;
      })
    }
  }, [refreshConfig]);

  const appContext: IApplicationContext = {
    AuthService: authentication,
    ADT3DSceneAdapter: adapterRef.current,
    config
  };

  if (process.env.REACT_APP_clientId === '[aad-client-id]') {
    return <div>You need to update your .env file - see the README</div>;
  }

  return (
    <Router>
      <ApplicationContext.Provider value={appContext}>
        <div className="app dark-mode slate">
          <Nav navigation={navItems} className={"toolbar"} />
          <MainPanel Navigation={navItems} applicationContext={appContext} />
        </div>
      </ApplicationContext.Provider>
    </Router>
  );
}

export default App;
