/**
 * @file Contigo Consulting AG Custom Maps Widget
 * @author  / MKoshy | JBuergmayr /
 * @copyright © Contigo Consulting AG, Brüsseler Str. 89-93, 50672 Köln. All rights reserved.
 * This code is the intellectual property of Contigo Consulting AG and is not to be used, reproduced, or distributed without explicit permission.
 */


(function () {

    const loading_tableContent = `
        <div style="
            width: 500px;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 20px;
        ">
            Loading...
        </div>
        `;

    const tabledata = [
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AW9I0Y5JLH89",
            "description": "Netto 3",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167198",
            "description": "167198",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9383681",
            "description": "50.9383681",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.82974358",
            "description": "6.82974358",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "AACHENER STR. 1260",
            "description": "AACHENER STR. 1260",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000079697",
            "description": "79697",
            "properties": {}
        },
        "STAGPR": {
            "id": "44.2",
            "description": "44.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071339385",
            "description": "2220071339385",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "1YI3PISYH11GEYJ46340IO3RO",
            "description": "Brutto VM",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167198",
            "description": "167198",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9383681",
            "description": "50.9383681",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.82974358",
            "description": "6.82974358",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "AACHENER STR. 1260",
            "description": "AACHENER STR. 1260",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000079697",
            "description": "79697",
            "properties": {}
        },
        "STAGPR": {
            "id": "44.2",
            "description": "44.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071339385",
            "description": "2220071339385",
            "properties": {}
        }
    }]

   const sampledata = [
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AW9I0Y5JLH89",
            "description": "Netto 3",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167198",
            "description": "167198",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9383681",
            "description": "50.9383681",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.82974358",
            "description": "6.82974358",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "AACHENER STR. 1260",
            "description": "AACHENER STR. 1260",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000079697",
            "description": "79697",
            "properties": {}
        },
        "STAGPR": {
            "id": "44.2",
            "description": "44.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071339385",
            "description": "2220071339385",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "1YI3PISYH11GEYJ46340IO3RO",
            "description": "Brutto VM",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167198",
            "description": "167198",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9383681",
            "description": "50.9383681",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.82974358",
            "description": "6.82974358",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "AACHENER STR. 1260",
            "description": "AACHENER STR. 1260",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000079697",
            "description": "79697",
            "properties": {}
        },
        "STAGPR": {
            "id": "44.2",
            "description": "44.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071339385",
            "description": "2220071339385",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AW9I0Y5JLH89",
            "description": "Netto 3",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167198",
            "description": "167198",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9383681",
            "description": "50.9383681",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.82974358",
            "description": "6.82974358",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "AACHENER STR. 1260",
            "description": "AACHENER STR. 1260",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000079697",
            "description": "79697",
            "properties": {}
        },
        "STAGPR": {
            "id": "45.2",
            "description": "45.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071339385",
            "description": "2220071339385",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "1YI3PISYH11GEYJ46340IO3RO",
            "description": "Brutto VM",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167198",
            "description": "167198",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9383681",
            "description": "50.9383681",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.82974358",
            "description": "6.82974358",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "AACHENER STR. 1260",
            "description": "AACHENER STR. 1260",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000079697",
            "description": "79697",
            "properties": {}
        },
        "STAGPR": {
            "id": "45.2",
            "description": "45.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071339385",
            "description": "2220071339385",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AW9I0Y5JLH89",
            "description": "Netto 3",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167306",
            "description": "167306",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9154735",
            "description": "50.9154735",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.92177328",
            "description": "6.92177328",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "BERRENRATHER STR. 348 / KYLLBURGER STR.",
            "description": "BERRENRATHER STR. 348 / KYLLBURGER STR.",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000095271",
            "description": "95271",
            "properties": {}
        },
        "STAGPR": {
            "id": "48.9",
            "description": "48.9",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071329029",
            "description": "2220071329029",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "1YI3PISYH11GEYJ46340IO3RO",
            "description": "Brutto VM",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167306",
            "description": "167306",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9154735",
            "description": "50.9154735",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.92177328",
            "description": "6.92177328",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "BERRENRATHER STR. 348 / KYLLBURGER STR.",
            "description": "BERRENRATHER STR. 348 / KYLLBURGER STR.",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000095271",
            "description": "95271",
            "properties": {}
        },
        "STAGPR": {
            "id": "48.9",
            "description": "48.9",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071329029",
            "description": "2220071329029",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AW9I0Y5JLH89",
            "description": "Netto 3",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167306",
            "description": "167306",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9154735",
            "description": "50.9154735",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.92177328",
            "description": "6.92177328",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "BERRENRATHER STR. 348 / KYLLBURGER STR.",
            "description": "BERRENRATHER STR. 348 / KYLLBURGER STR.",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000095271",
            "description": "95271",
            "properties": {}
        },
        "STAGPR": {
            "id": "49.9",
            "description": "49.9",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071329029",
            "description": "2220071329029",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "1YI3PISYH11GEYJ46340IO3RO",
            "description": "Brutto VM",
            "rawValue": "0",
            "formattedValue": "0,00"
        },
        "SQID": {
            "id": "0000000167306",
            "description": "167306",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9154735",
            "description": "50.9154735",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.92177328",
            "description": "6.92177328",
            "properties": {}
        },
        "SWERBETID": {
            "id": "00000000000",
            "description": "Nicht zugeordnet",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "BERRENRATHER STR. 348 / KYLLBURGER STR.",
            "description": "BERRENRATHER STR. 348 / KYLLBURGER STR.",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!PLAKATUNION",
            "description": "Plakatunion",
            "properties": {
                "SAU.LONG_TEXT": "Plakatunion",
                "SAU.ID": "6-"
            }
        },
        "SWARENG3": {
            "id": "",
            "description": "Nicht zugeordnet",
            "properties": {
                "SWARENG3.LONG_TEXT": "Nicht zugeordnet"
            }
        },
        "SPPSW": {
            "id": "0000095271",
            "description": "95271",
            "properties": {}
        },
        "STAGPR": {
            "id": "49.9",
            "description": "49.9",
            "properties": {}
        },
        "SDAWN": {
            "id": "2220071329029",
            "description": "2220071329029",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AYFXWM7G7I9T",
            "description": "Auslastung 1 - bezahlte Auslastung",
            "rawValue": "0.125",
            "formattedValue": "12,50%"
        },
        "SQID": {
            "id": "0000000176754",
            "description": "176754",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.8812564912",
            "description": "50.8812564912",
            "properties": {}
        },
        "SLONGD": {
            "id": "7.0765568143",
            "description": "7.0765568143",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10039841200",
            "description": "10039841200",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "description": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000058823",
            "description": "58823",
            "properties": {}
        },
        "STAGPR": {
            "id": "32.2",
            "description": "32.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256456",
            "description": "3680010256456",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AYFXWM7G7UWX",
            "description": "Auslastung 3 - Auslastung inkl. UML",
            "rawValue": "0.5",
            "formattedValue": "50,00%"
        },
        "SQID": {
            "id": "0000000176754",
            "description": "176754",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.8812564912",
            "description": "50.8812564912",
            "properties": {}
        },
        "SLONGD": {
            "id": "7.0765568143",
            "description": "7.0765568143",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10039841200",
            "description": "10039841200",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "description": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000058823",
            "description": "58823",
            "properties": {}
        },
        "STAGPR": {
            "id": "32.2",
            "description": "32.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256456",
            "description": "3680010256456",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AW9I0Y5JLH89",
            "description": "Netto 3",
            "rawValue": "1122.76",
            "formattedValue": "1.122,76"
        },
        "SQID": {
            "id": "0000000176754",
            "description": "176754",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.8812564912",
            "description": "50.8812564912",
            "properties": {}
        },
        "SLONGD": {
            "id": "7.0765568143",
            "description": "7.0765568143",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10039841200",
            "description": "10039841200",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "description": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000058823",
            "description": "58823",
            "properties": {}
        },
        "STAGPR": {
            "id": "32.2",
            "description": "32.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256456",
            "description": "3680010256456",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "1YI3PISYH11GEYJ46340IO3RO",
            "description": "Brutto VM",
            "rawValue": "2228",
            "formattedValue": "2.228,00"
        },
        "SQID": {
            "id": "0000000176754",
            "description": "176754",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.8812564912",
            "description": "50.8812564912",
            "properties": {}
        },
        "SLONGD": {
            "id": "7.0765568143",
            "description": "7.0765568143",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10039841200",
            "description": "10039841200",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "description": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000058823",
            "description": "58823",
            "properties": {}
        },
        "STAGPR": {
            "id": "32.2",
            "description": "32.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256456",
            "description": "3680010256456",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AYFXWM7G7I9T",
            "description": "Auslastung 1 - bezahlte Auslastung",
            "rawValue": "0.25",
            "formattedValue": "25,00%"
        },
        "SQID": {
            "id": "0000000176754",
            "description": "176754",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.8812564912",
            "description": "50.8812564912",
            "properties": {}
        },
        "SLONGD": {
            "id": "7.0765568143",
            "description": "7.0765568143",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10039841200",
            "description": "10039841200",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "description": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000058823",
            "description": "58823",
            "properties": {}
        },
        "STAGPR": {
            "id": "33.2",
            "description": "33.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256456",
            "description": "3680010256456",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AYFXWM7G7UWX",
            "description": "Auslastung 3 - Auslastung inkl. UML",
            "rawValue": "0.25",
            "formattedValue": "25,00%"
        },
        "SQID": {
            "id": "0000000176754",
            "description": "176754",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.8812564912",
            "description": "50.8812564912",
            "properties": {}
        },
        "SLONGD": {
            "id": "7.0765568143",
            "description": "7.0765568143",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10039841200",
            "description": "10039841200",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "description": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000058823",
            "description": "58823",
            "properties": {}
        },
        "STAGPR": {
            "id": "33.2",
            "description": "33.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256456",
            "description": "3680010256456",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AW9I0Y5JLH89",
            "description": "Netto 3",
            "rawValue": "1159.3",
            "formattedValue": "1.159,30"
        },
        "SQID": {
            "id": "0000000176754",
            "description": "176754",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.8812564912",
            "description": "50.8812564912",
            "properties": {}
        },
        "SLONGD": {
            "id": "7.0765568143",
            "description": "7.0765568143",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10039841200",
            "description": "10039841200",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "description": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000058823",
            "description": "58823",
            "properties": {}
        },
        "STAGPR": {
            "id": "33.2",
            "description": "33.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256456",
            "description": "3680010256456",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "1YI3PISYH11GEYJ46340IO3RO",
            "description": "Brutto VM",
            "rawValue": "2089.4",
            "formattedValue": "2.089,40"
        },
        "SQID": {
            "id": "0000000176754",
            "description": "176754",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.8812564912",
            "description": "50.8812564912",
            "properties": {}
        },
        "SLONGD": {
            "id": "7.0765568143",
            "description": "7.0765568143",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10039841200",
            "description": "10039841200",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "description": "MARIENBURGER STR. 1 (HIT EINF.SI.EGMONTSTR..)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000058823",
            "description": "58823",
            "properties": {}
        },
        "STAGPR": {
            "id": "33.2",
            "description": "33.2",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256456",
            "description": "3680010256456",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AYFXWM7G7I9T",
            "description": "Auslastung 1 - bezahlte Auslastung",
            "rawValue": "0.125",
            "formattedValue": "12,50%"
        },
        "SQID": {
            "id": "0000000176756",
            "description": "176756",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9226134626",
            "description": "50.9226134626",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.851227507",
            "description": "6.851227507",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10053485800",
            "description": "10053485800",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "description": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000025409",
            "description": "25409",
            "properties": {}
        },
        "STAGPR": {
            "id": "19.9",
            "description": "19.9",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256458",
            "description": "3680010256458",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AYFXWM7G7UWX",
            "description": "Auslastung 3 - Auslastung inkl. UML",
            "rawValue": "0.1875",
            "formattedValue": "18,75%"
        },
        "SQID": {
            "id": "0000000176756",
            "description": "176756",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9226134626",
            "description": "50.9226134626",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.851227507",
            "description": "6.851227507",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10053485800",
            "description": "10053485800",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "description": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000025409",
            "description": "25409",
            "properties": {}
        },
        "STAGPR": {
            "id": "19.9",
            "description": "19.9",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256458",
            "description": "3680010256458",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AW9I0Y5JLH89",
            "description": "Netto 3",
            "rawValue": "538.06",
            "formattedValue": "538,06"
        },
        "SQID": {
            "id": "0000000176756",
            "description": "176756",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9226134626",
            "description": "50.9226134626",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.851227507",
            "description": "6.851227507",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10053485800",
            "description": "10053485800",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "description": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000025409",
            "description": "25409",
            "properties": {}
        },
        "STAGPR": {
            "id": "19.9",
            "description": "19.9",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256458",
            "description": "3680010256458",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "1YI3PISYH11GEYJ46340IO3RO",
            "description": "Brutto VM",
            "rawValue": "1839.08",
            "formattedValue": "1.839,08"
        },
        "SQID": {
            "id": "0000000176756",
            "description": "176756",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9226134626",
            "description": "50.9226134626",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.851227507",
            "description": "6.851227507",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10053485800",
            "description": "10053485800",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "description": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000025409",
            "description": "25409",
            "properties": {}
        },
        "STAGPR": {
            "id": "19.9",
            "description": "19.9",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256458",
            "description": "3680010256458",
            "properties": {}
        }
    },
    {
        "@MeasureDimension": {
            "id": "AARDEFXFG5H44AYFXWM7G7UWX",
            "description": "Auslastung 3 - Auslastung inkl. UML",
            "rawValue": "0.03333333333333333",
            "formattedValue": "3,33%"
        },
        "SQID": {
            "id": "0000000176756",
            "description": "176756",
            "properties": {}
        },
        "SLATIT": {
            "id": "50.9226134626",
            "description": "50.9226134626",
            "properties": {}
        },
        "SLONGD": {
            "id": "6.851227507",
            "description": "6.851227507",
            "properties": {}
        },
        "SWERBETID": {
            "id": "10053485800",
            "description": "10053485800",
            "properties": {}
        },
        "SOKZ": {
            "id": "05315000",
            "description": "Köln, Stadt",
            "properties": {}
        },
        "SDESCRIPT": {
            "id": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "description": "MAX-PLANCK-STR. 9-11 (GLOBUS 1.B.EINF.)",
            "properties": {}
        },
        "SAU": {
            "id": "0HIER_NODE!STROEERGRUPPE",
            "description": "STROEERGRUPPE",
            "properties": {
                "SAU.LONG_TEXT": "STROEERGRUPPE",
                "SAU.ID": "4-"
            }
        },
        "SWARENG3": {
            "id": "200",
            "description": "Großfläche unbel.",
            "properties": {
                "SWARENG3.LONG_TEXT": "Großflächen"
            }
        },
        "SPPSW": {
            "id": "0000025409",
            "description": "25409",
            "properties": {}
        },
        "STAGPR": {
            "id": "20.3",
            "description": "20.3",
            "properties": {}
        },
        "SDAWN": {
            "id": "3680010256458",
            "description": "3680010256458",
            "properties": {}
        }
    }]

    // Constants for loading Leaflet CSS and JavaScript libraries.
    const osMap_loadLeafletCSS_href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    const osMap_loadLeafletCSS_integrity =   'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    const osMap_loadLeafletJS_src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    const osMap_loadLeafletJS_integrity =  'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    const osMap_loadMarkerClusterCSS_href = [
        'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css',
        'https://unpkg.com/leaflet.markercluster@1.4.1/dist/MarkerCluster.css'
    ];
    const osMap_loadMarkerClusterJS_src = 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster-src.js';
    // Constant for loading Google Maps Marker Clusterer library.
    const gMap_cluster_src = `https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js`;


    const google_mapsjs_api_key_in_js = ''; // Google Maps API key.
    const default_map_in_js = "osm";                           // default map to load  [2 possible values - 'google', 'osm' ]  
    const image_url_prefix = "https://plakatonline.eshamburg.de/ImageDBServer/ImageView.aspx?SDAW=";
    const default_icon_url = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
            <style>
            :host {
              display: block;
              width: 100%;
              height: 100%;
            }
            #d-widget-container {
                height: 100%;
                width: 100%;
                display: block;
                align-items: center;
            }
            #d-map-container {
                height: 94%;
                width: 100%;
                display: flex;
                position: relative;
            }
            
            #d-osMap {
                height: 100%;
                width: 100%;
                display: block; 
                position: absolute
                visibility: hidden;
            }
            
            #d-gMap {
                height: 100%;
                width: 100%;
                display: block; 
                position: absolute;
                visibility: hidden;
            }


            .leaflet-popup-content-wrapper {
                overflow-y: auto;
                padding-top: 10px;
                padding: 10px;
              }

            .tg {
                border-collapse: collapse;
                border-spacing: 0;
                table-layout: auto;
            }
            .tg img {
                max-width: 400px;
                height: auto;
                display: block; /* Remove extra spacing */
            }
            #d-bottom-bar {
                height: 6%;
                width: 100%;
                background: linear-gradient(to bottom, #00B0B2, #A4D6D4);
                display: flex;  
                justify-content: space-between;
                align-items: center; 
                position: relative;             
            }

            #d-map-toggle {
                
                background: transparent;
                border-radius: 4px;
            }

            #d-footnote {
                font-size: 10px;
                color: white;
                position: relative;
                margin-right: 30px;
                
            }
            #d-loading-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color:  #A4D6D4;
                display: block; 
                text-align: center;
                color: white;
                padding-top: 280px; 
                align-items: center; 
                justify-content: center; 
                flex-direction: column; 
                visibility: visible;
}
            }

        </style>
       <div id="d-widget-container">
            <div id="d-map-container">
                <div id="d-osMap"></div>
                <div id="d-gMap"></div>
            </div>
            <div id="d-bottom-bar">
                <div id="d-map-toggle">
                    <label><input type="radio" id='rb_gMap' name="rbg_mapType" value="google" checked> Google Maps</label>
                    <label><input type="radio" id='rb_osMap'name="rbg_mapType" value="osm" > OpenStreet Maps</label>
                </div>
                <div id="d-footnote">Contigo custom Maps widget</div>
            </div>

            <div id="d-loading-overlay">
                <p id="loading-text">Loading Map dependencies...</p>  
            </div>

        </div>
        


    `;

class CombinedMap extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this.fe_osMap = null;                           // Leaflet map instance.
        this.fe_gMap = null;                            // Google Maps instance.
        this.DB_MEASURE_ALIGNMENT = Object.create(null); // Object to store all dimensions aligned measures.
        this.DB_MARKER_DATA = Object.create(null);// Object to store on all marker points.
        this.DB_COORDINATE_DATA = Object.create(null);  // Array to store coordinate data.
        this.fe_gMap_markers = [];                      // Array to store Google Maps markers.
        this.fe_osMap_markers = [];                     // Array to store Leaflet markers.
        this.mapType = 'google';                       // assigning  Current map type (google or osm) based on the toggle button. default checked google.
        this.gMap_markerCluster = null;                 // Google Maps Marker Clusterer instance.
        this.markerClustererLoaded = false;
        this.google_mapsjs_api_key = google_mapsjs_api_key_in_js;
        this.default_map = default_map_in_js;
        this.gMapLoaded = false;                       // check whether map is loaded from widget api key or by set api key method
        this.icons_id = null;
        this.icon_url_prefix = '';
        this.gMap_present_marker = null; // Google Maps marker for the currently selected point.
        this.osMap_present_marker = null; // Leaflet marker for the currently selected point.
        this.init();
    }

    /**
     * Initializes the component by loading map dependencies and setting up event listeners.
     */

    async init() {
     console.log("reached init");
        try{ 
            await this.fe_init_osMap();     // calls Open Street map initialization method
        } catch (error) {
            console.error("Error loading OSM dependencies:", error);
            return false;
        }


        try{ 
            if(this.google_mapsjs_api_key!= '' && this.fe_gMap === null)    // check if google maps api key is provided in the constructor before calling google maps initialization method
            {
                // console.log("reached init inside google block");
                await this.fe_init_gMap();
            }
        } catch (error) {
            console.error("Error loading google dependencies:", error);
            return false;
        }
        
        this.icon_url_prefix = location.origin;
        //this.dispatchEvent(new CustomEvent("EVENTW2S_DB_FILL_COORDINATE_DATA"));
        const mapTypeRadios = this.shadowRoot.querySelectorAll('input[name="rbg_mapType"]');

        //  Event Listener for the radio button
        mapTypeRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                this.mapType = radio.value;
                this.renderMap();
            });
        });

    }

    // Widget Render method. Renders the map based on the selected map type "google" [Google Maps] or "osm" [OpenStreetMap] and available data.
    async renderMap(){
        if (this.mapType === 'google' && Object.keys(this.DB_COORDINATE_DATA).length > 0) {
            this.fe_set_view_loadingScreen_overlay();
            if(this.fe_gMap_markers.length === 0)
            {   
                this.shadowRoot.querySelector("#loading-text").textContent = `Rendering ${Object.keys(this.DB_COORDINATE_DATA).length} datapoints into ${this.mapType} maps...`;
                this.fe_set_view_loadingScreen_overlay();
                await this.fe_render_gMap();
                this.fe_set_view_gMap();
            }
            else
            {
                this.fe_set_view_gMap();

            }
            
        } else if (this.mapType === 'osm' && Object.keys(this.DB_COORDINATE_DATA).length > 0) {
            this.fe_set_view_loadingScreen_overlay();
            if(this.fe_osMap_markers.length === 0)
                {   
                    this.shadowRoot.querySelector("#loading-text").textContent = `Rendering ${Object.keys(this.DB_COORDINATE_DATA).length} datapoints into ${this.mapType} maps...`;
                    this.fe_set_view_loadingScreen_overlay();
                    await this.fe_render_osMap();
                    this.fe_set_view_osMap();

                }
                else
                {   
                    
                    this.fe_set_view_osMap();
                    this.fe_osMap.invalidateSize();
                }
            
        }

    }

    /** Sets the view to display the loading screen overlay. */
    async fe_set_view_loadingScreen_overlay()
    {
        this.shadowRoot.querySelector('#d-osMap').style.visibility = 'hidden';
        this.shadowRoot.querySelector('#d-gMap').style.visibility = 'hidden';
        this.shadowRoot.querySelector('#d-loading-overlay').style.visibility = 'visible';

     }

     /** Sets the view to display the Google Maps interface. */
    async fe_set_view_gMap()
    {
        this.shadowRoot.querySelector('#d-osMap').style.visibility = 'hidden';
        this.shadowRoot.querySelector('#d-gMap').style.visibility = 'visible';
        this.shadowRoot.querySelector('#d-loading-overlay').style.visibility = 'hidden';
        
    }

    /** Sets the view to display the OpenStreetMap interface. */
    async fe_set_view_osMap()
    {

        this.shadowRoot.querySelector('#d-gMap').style.visibility = 'hidden';
        this.shadowRoot.querySelector('#d-osMap').style.visibility = 'visible';
        this.shadowRoot.querySelector('#d-loading-overlay').style.visibility = 'hidden';

    }

    /** Initializes the OpenStreetMap (OSM) by loading Leaflet and Marker Cluster dependencies. */   
    async fe_init_osMap(){


        try {
                
            await this.osMap_loadLeafletCSS();  
            await this.osMap_loadLeafletJS();
            await this.osMap_loadMarkerClusterCSS();
            await this.osMap_loadMarkerClusterJS(); 
            console.log("All OSM dependencies loaded successfully");
            return true;
            
        } catch (error) {
            console.error("Error loading OSM dependencies:", error);
            return false;
        }
    }

     /** Renders the OpenStreetMap with markers based on the coordinate data. */
 fe_render_osMap() {
    return new Promise((resolve, reject) => {
        try {
            const bounds = new L.LatLngBounds();
            const mapIcon = L.Icon.extend({
                options: {
                    iconSize: [32, 32],
                    iconAnchor: [16, 0],
                    popupAnchor: [-32, 0]
                }
            });

            const markerCluster = L.markerClusterGroup();
            markerCluster.clearLayers();

            const mapInstance = this.fe_osMap;
            let item_idx = 0; // Keep in outer scope

            // local function to update the popup Content. 
            const updatePopupContent = (marker_itemkey) => {
                const marker_dataPoint = this.DB_COORDINATE_DATA[marker_itemkey];
                const cur_lat = parseFloat(marker_dataPoint.SLATIT);
                const cur_lng = parseFloat(marker_dataPoint.SLONGD);
                const tableContent = this.fe_generateTableContent(marker_itemkey, item_idx);
                const content = `<div style="max-width: none;">${tableContent}</div>`;

                const popup = L.popup({
                    content: content,
                    maxWidth: "auto"
                }).setLatLng([cur_lat, cur_lng])
                popup.itemkey = marker_itemkey;
                popup.openOn(this.fe_osMap);
            };

            // Loop over data points
            Object.keys(this.DB_COORDINATE_DATA).forEach(itemkey => {
                const dataPoint = this.DB_COORDINATE_DATA[itemkey];
                const lat_m = parseFloat(dataPoint.SLATIT);
                const lng_m = parseFloat(dataPoint.SLONGD);
                let cleaned_sau_value = "";
                const parts = dataPoint.items[0].SAUID.split('!');
                if (parts.length > 1) {
                    cleaned_sau_value = parts[parts.length - 1]; 
                } else {
                    cleaned_sau_value = dataPoint.items[0].SAU; 
                }
                let lookupKey = ("SMWI_" + cleaned_sau_value).toUpperCase();
                let iconUrl = "";
                if(this.icons_id[lookupKey]){
                    iconUrl = this.icon_url_prefix + this.icons_id[lookupKey ];
                }
                else{
                    //console.log(this.icons_id[lookupKey ]);
                     iconUrl = default_icon_url;
                }
                const setIcon = new mapIcon({ iconUrl: iconUrl });

                const marker = L.marker([lat_m, lng_m], {
                    icon: setIcon,
                    title: dataPoint.items[0].SDESCRIPT
                });

                marker.on('click', (e) => {
                    const marker_itemkey = itemkey;
                    item_idx = 0;
                    mapInstance.setView(e.latlng, 20);
                    updatePopupContent(marker_itemkey);
                });

                markerCluster.addLayer(marker);
                bounds.extend([lat_m, lng_m]);
                this.fe_osMap_markers.push(marker);
            });

            // Add cluster and fit map
            this.fe_osMap.addLayer(markerCluster);
            this.fe_osMap.fitBounds(bounds);

            // Attach the popupopen handler 
            this.fe_osMap.on('popupopen', (e) => {
                if (e.popup.initDone) return;
                e.popup.initDone = true;

                const popupNode = e.popup.getElement();
                if (!popupNode) return;

                const px = mapInstance.project(e.popup.getLatLng());
                px.y -= 250;
                mapInstance.panTo(mapInstance.unproject(px), { animate: true });
                
                const itemCounter = popupNode.querySelector("#itemCounter");
                const nextBtn = popupNode.querySelector("#nextItem");
                const prevBtn = popupNode.querySelector("#prevItem");

                const itemkey = e.popup.itemkey;

                if (nextBtn) {
                    nextBtn.addEventListener("click", () => {
                        if (item_idx < this.DB_COORDINATE_DATA[itemkey].items.length - 1) {
                            item_idx++;
                            if (itemCounter)
                                itemCounter.textContent = `${item_idx + 1} / ${this.DB_COORDINATE_DATA[itemkey].items.length}`;
                            updatePopupContent(itemkey);
                        }
                    });
                }

                if (prevBtn) {
                    prevBtn.addEventListener("click", () => {
                        if (item_idx > 0) {
                            item_idx--;
                            if (itemCounter)
                                itemCounter.textContent = `${item_idx + 1} / ${this.DB_COORDINATE_DATA[itemkey].items.length}`;
                            updatePopupContent(itemkey);
                        }
                    });
                }
            });

            // Let the map resize properly
            setTimeout(() => {
                this.fe_osMap.invalidateSize();
                this.fe_osMap.fitBounds(bounds);
                resolve();
            }, 100);
        } catch (error) {
            reject(error);
        }
    });
}


    /** Initializes the Google Maps instance by loading the Google Maps API and Marker Clusterer library. */
    async fe_init_gMap() {

        if(this.gMapLoaded === false)
        {   
            this.gMapLoaded = true;
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${this.google_mapsjs_api_key}&callback=initgMap&loading=async&v=weekly&libraries=marker`;
                script.defer = true;
                script.onerror = () => {
                    console.error('Error loading Google Maps API');
                    reject(new Error('Error loading Google Maps API'));
                };
                document.head.appendChild(script);
                
                // Define the callback function that will be executed when the Google Maps API is loaded.
                window.initgMap = () => {
                    var mapContainer = this.shadowRoot.getElementById('d-gMap');
                    if (mapContainer) {
                        this.fe_gMap = null;
                        mapContainer.innerHTML = '';
                    }
                    // Create a new Google Maps instance and initialize it with the provided options (default lat,lng Contigo Consulting AG).  
                    this.fe_gMap = new google.maps.Map(mapContainer, {
                        center: { lat: 50.94195189462832, lng: 6.934832969310373}, 
                        zoom: 8,
                        mapId: 'f61d67e24706f841'
    
                    })
                    this.dispatchEvent(new CustomEvent("EVENTW2S_DB_FILL_COORDINATE_DATA"));
                    console.log("Gmap loaded");
                    ;
    
                    const clustererScript = document.createElement('script');
                    clustererScript.src = gMap_cluster_src;
                    clustererScript.onerror = () => console.error('Error loading MarkerClusterer library.');
                    clustererScript.onload = () => {
                        console.log("gmap Marker cluster loaded");
                         this.markerClustererLoaded =  true;
                    resolve();
                    };
                    document.head.appendChild(clustererScript);
                };
                
            });
        }
        
    }

      /** Renders the Google Maps with markers based on the coordinate data. */
   fe_render_gMap(){
    return new Promise((resolve, reject) => {
        try {
            if (this.gMap_markerCluster) {
                this.gMap_markerCluster.clearMarkers();
                this.gMap_markerCluster = null;
            }
            if (this.fe_gMap_markers && this.fe_gMap_markers.length > 0) {
                this.fe_gMap_markers.forEach(marker => marker.setMap(null));
                this.fe_gMap_markers = [];
            }

            let infoWindow = null;
            const bounds = new google.maps.LatLngBounds();
            google.maps.event.trigger(this.fe_gMap, 'resize');
            let item_idx = 0; // Initialize item_idx for each marker

            // //Local fucntion to update the popup contents 
            //  const updateInfoWindow = (marker_itemkey) => {
            //             let tableContent = this.fe_generateTableContent(marker_itemkey, item_idx);
            //             infoWindow.setContent(tableContent);
            //             google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
            //                // console.log("reached domready");
            //                 setTimeout(() => {
            //                 const navContainer = this.shadowRoot.querySelector(`#${this.mapType}-nav-buttons`);
            //                     if (navContainer) {
            //                 const itemCounter =  navContainer.querySelector("#itemCounter");
            //                 const nextBtn =  navContainer.querySelector("#nextItem"); 
            //                 const prevBtn =  navContainer.querySelector("#prevItem");
            //                 if (nextBtn) {
            //                   //  console.log("DEBUG: 'nextItem' button found.");
            //                     nextBtn.addEventListener("click", () => {
            //                      //   console.log("Next button clicked");
            //                         if (item_idx < this.DB_COORDINATE_DATA[marker_itemkey].items.length - 1) {
            //                             item_idx++;
            //                             itemCounter.textContent = `${item_idx + 1} / ${this.DB_COORDINATE_DATA[marker_itemkey].items.length}`;
            //                             updateInfoWindow(marker_itemkey); // Call helper to update content and re-attach
            //                         }
            //                     });
            //                 }
            //                 if (prevBtn) {
            //                   //  console.log("DEBUG: 'prev' button found.");
            //                     prevBtn.addEventListener("click", () => {
            //                      //   console.log("Previous button clicked");
            //                         if (item_idx > 0) {
            //                             item_idx--;
            //                             itemCounter.textContent = `${item_idx + 1} / ${this.DB_COORDINATE_DATA[marker_itemkey].items.length}`;
            //                             updateInfoWindow(marker_itemkey); // Call helper to update content and re-attach
            //                         }
            //                     });
            //                 }
            //                     }
            //             },50);
            //             });
            //         };


            Object.keys(this.DB_COORDINATE_DATA).forEach(itemkey => {
                let dataPoint = this.DB_COORDINATE_DATA[itemkey];
                const markerImg = document.createElement("img");
                let cleaned_sau_value = "";
                const parts = dataPoint.SAUID.split('!');
                if (parts.length > 1) {
                    cleaned_sau_value = parts[parts.length - 1]; 
                } else {
                    cleaned_sau_value = dataPoint.SAU; 
                }
                let lookupKey = ("SMWI_" + cleaned_sau_value).toUpperCase();
                let iconUrl = "";
                if(this.icons_id[lookupKey]){
                    iconUrl = this.icon_url_prefix + this.icons_id[lookupKey ];
                }
                else{
                   // console.log(this.icons_id[lookupKey ]);
                     iconUrl = default_icon_url;
                }
                markerImg.src = iconUrl;

                const lat_m = parseFloat(dataPoint.SLATIT);
                const lng_m = parseFloat(dataPoint.SLONGD);

                if (lat_m && lng_m) {
                    const position = { lat: lat_m, lng: lng_m };
                    bounds.extend(position);
                    const marker = new google.maps.marker.AdvancedMarkerElement({
                        map: this.fe_gMap,
                        position,
                        content: markerImg,
                        title: dataPoint.SDESCRIPT,
                    });

                    this.fe_gMap_markers.push(marker);
                    marker.addListener('gmp-click', (event) => {  
                        debugger;
                        
                        if (infoWindow) {
                            infoWindow.close();
                        } else {
                            infoWindow = new google.maps.InfoWindow();
                        }
                        this.gMap_present_marker.itemkey = itemkey; // Store the item key for the clicked marker
                        item_idx = 0; // Reset index when a new marker is clicked
                        this.fe_gMap.setZoom(20);
                        this.fe_gMap.setCenter(position);
                        infoWindow.setContent(loading_tableContent);
                        this.dispatchEvent(new CustomEvent("EVENTW2S_DB_FILL_TABLE_DATA"));
                        // updateInfoWindow(marker_itemkey); // Initial call to display content and attach listeners
                        if (infoWindow && this.fe_gMap && marker) {
                            infoWindow.open(this.fe_gMap, marker);
                        //    console.log("InfoWindow should be opening.");
                        } else {
                            console.error("InfoWindow.open() failed: infoWindow, map, or marker is null/undefined.");
                            console.error("InfoWindow:", infoWindow, "Map:", this.fe_gMap, "Marker:", marker);
                        }
                    });
                }
            });

            if (this.fe_gMap_markers.length > 0) {
                this.fe_gMap.fitBounds(bounds);
            }

            if (this.fe_gMap_markers.length > 20 && this.markerClustererLoaded) {
                this.gMap_markerCluster = new markerClusterer.MarkerClusterer({
                    markers: this.fe_gMap_markers,
                    map: this.fe_gMap,
                });

                this.gMap_markerCluster.addListener('clusteringend', () => {
                    console.log("Google Map Clustering finished");
                    resolve();
                });
            } else {
                resolve();
            }
            this.fe_gMap.addListener('click', () => {
                if (infoWindow) {
                    infoWindow.close();
                    // No need to reset item_idx here, as it's handled per marker click
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}


    /** Sets the Google Maps JavaScript API key and initializes the Google Maps instance. */
    async set_google_mapsjs_api_key(api_key) {
        // console.log("reached setmaps api key");
        if(this.google_mapsjs_api_key === '' && this.fe_gMap === null)
        {
            this.google_mapsjs_api_key = api_key;
            this.fe_init_gMap();
        }
        
    }

     /** Sets the default map type and triggers data loading from the data source. */
    async set_default_map(map_default){
        if(map_default != ''){

            this.mapType = map_default;
            if(this.mapType === 'google')
            {
                this.shadowRoot.getElementById('rb_gMap').checked = true;  
            }
            else{
                this.shadowRoot.getElementById('rb_osMap').checked = true;
            }
            this.fe_set_view_loadingScreen_overlay();
          //  this.dispatchEvent(new CustomEvent("EVENTW2S_DB_FILL_COORDINATE_DATA"));

            }
        

    }

    /** Set Map Icons from Story */
    async set_icons_id(icons_id){     
            this.icons_id = icons_id;
            //console.log("recieved icon IDs", icons_id);
    }

    

    /** OSM dependency function start*/
    /** following five functions load the dependencies for OSM */
    async osMap_loadLeafletCSS() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = osMap_loadLeafletCSS_href;
        link.integrity =  osMap_loadLeafletCSS_integrity;
        link.crossOrigin = '';
        this.shadowRoot.appendChild(link);
    }

    async osMap_loadLeafletJS() {
        return new Promise((resolve) => { 
            const script = document.createElement('script');
            script.src = osMap_loadLeafletJS_src;
            script.integrity = osMap_loadLeafletJS_integrity;
            script.crossOrigin = '';
            script.onload = () => {
                this.fe_init_onLoad_osMap();
                resolve(); 
            };
            this.shadowRoot.appendChild(script);
        });
    }

    async osMap_loadMarkerClusterCSS() {

        osMap_loadMarkerClusterCSS_href.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            this.shadowRoot.appendChild(link);
        });
    }

    async osMap_loadMarkerClusterJS() {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = osMap_loadMarkerClusterJS_src;
            script.onload = () => {
                resolve();
            };
            this.shadowRoot.appendChild(script);
        });
    }
    
    /** Initializes the Leaflet map and sets the initial view to the data source overlay. */
    fe_init_onLoad_osMap() {
        this.fe_osMap = L.map(this.shadowRoot.getElementById('d-osMap')).setView([51.1657, 10.4515], 6); // Centered on Germany
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.fe_osMap);
        this.fe_set_view_loadingScreen_overlay();
    }

    /** OSM dependency function end*/

/** Below Code can be edited when there is change in data */

  /** Sets the master coordinate data, handling both initial data loading and appending. */
    async set_coordinate_master_data(SAC_COORDINATE_DATA,read_finish_flag,reset_data_flag) {
        if (reset_data_flag === true) {
            this.fe_set_view_loadingScreen_overlay();
             this.shadowRoot.querySelector("#loading-text").textContent = `Inserting ${Object.keys(this.DB_MARKER_DATA).length} datapoints into ${this.mapType} maps...`;
            this.DB_MARKER_DATA = Object.create(null);
            SAC_COORDINATE_DATA = sampledata;
        }
        SAC_COORDINATE_DATA.forEach(item => {
            const key = `${item.SQID?.id}_${item.SLATIT?.id}_${item.SLONGD?.id}`;
           
            if (this.DB_MARKER_DATA[key] === undefined) {
              this.DB_MARKER_DATA[key] = Object.create(null);
                this.DB_MARKER_DATA[key].SQID = item.SQID?.id;
                this.DB_MARKER_DATA[key].SLATIT = item.SLATIT?.id;
                this.DB_MARKER_DATA[key].SLONGD = item.SLONGD?.id;
                this.DB_MARKER_DATA[key].SDESCRIPT = item.SDESCRIPT?.id;
                this.DB_MARKER_DATA[key].SAUID = item.SAU?.id;
                this.DB_MARKER_DATA[key].SAU = item.SAU?.description;
                this.DB_MARKER_DATA[key].SWARENG3 = item.SWARENG3?.description;
                
            }
          }, Object.create(null));

        this.shadowRoot.querySelector("#loading-text").textContent = `Loaded ${Object.keys(this.DB_MARKER_DATA).length} datapoints from SAC...`;
        if (read_finish_flag === true) {
          this.shadowRoot.querySelector("#loading-text").textContent = `Inserting ${Object.keys(this.DB_MARKER_DATA).length} datapoints into ${this.mapType} maps...`;
          this.DB_COORDINATE_DATA = this.DB_MARKER_DATA;
          this.fe_gMap_markers = [];
          this.fe_osMap_markers = [];
          this.renderMap();
          this.DB_MARKER_DATA = Object.create(null);
        }
    }

    async set_coordinate_master_table_data(SAC_COORDINATE_TABLE_DATA) {
        SAC_COORDINATE_TABLE_DATA = tabledata;
        SAC_COORDINATE_TABLE_DATA.forEach(item => {
            const key = `${item.SQID?.id}_${item.SLATIT?.id}_${item.SLONGD?.id}_${item.SOKZ?.id}_${item.SDAWN?.id}_${item.SWERBETID?.id}_${item.SDESCRIPT?.id}_${item.SAU?.description}_${item.SWARENG3?.description}_${item.SPPSW?.id}_${item.STAGPR?.id}`;
           
            if (this.DB_MEASURE_ALIGNMENT[key] === undefined) {
              this.DB_MEASURE_ALIGNMENT[key] = Object.create(null);
                this.DB_MEASURE_ALIGNMENT[key].SQID = item.SQID?.id;
                this.DB_MEASURE_ALIGNMENT[key].SLATIT = item.SLATIT?.id;
                this.DB_MEASURE_ALIGNMENT[key].SLONGD = item.SLONGD?.id;
                this.DB_MEASURE_ALIGNMENT[key].SOKZ = item.SOKZ?.description;
                this.DB_MEASURE_ALIGNMENT[key].SDAWN = item.SDAWN?.id;
                this.DB_MEASURE_ALIGNMENT[key].SWERBETID = item.SWERBETID?.id
                this.DB_MEASURE_ALIGNMENT[key].SDESCRIPT = item.SDESCRIPT?.id;
                this.DB_MEASURE_ALIGNMENT[key].SAUID = item.SAU?.id;
                this.DB_MEASURE_ALIGNMENT[key].SAU = item.SAU?.description;
                this.DB_MEASURE_ALIGNMENT[key].SWARENG3 = item.SWARENG3?.description;
                this.DB_MEASURE_ALIGNMENT[key].SPPSW = item.SPPSW?.id;
                this.DB_MEASURE_ALIGNMENT[key].STAGPR = item.STAGPR?.id
                this.DB_MEASURE_ALIGNMENT[key].NETTO3 = 0.0;
                this.DB_MEASURE_ALIGNMENT[key].BRUTTOVM = 0.0;
                this.DB_MEASURE_ALIGNMENT[key].AUSLASTUNG1 = 0.0;
                this.DB_MEASURE_ALIGNMENT[key].AUSLASTUNG3 = 0.0;
                
                if ( item["@MeasureDimension"].id === "AARDEFXFG5H44AW9I0Y5JLH89" )
                {
                    this.DB_MEASURE_ALIGNMENT[key].NETTO3 = item["@MeasureDimension"].rawValue; 
                }
                if ( item["@MeasureDimension"].id === "AARDEFXFG5H44AYFXWM7G7I9T" )
                {
                    this.DB_MEASURE_ALIGNMENT[key].AUSLASTUNG1 = item["@MeasureDimension"].rawValue; 
                }
                if ( item["@MeasureDimension"].id === "1YI3PISYH11GEYJ46340IO3RO" )
                {
                    this.DB_MEASURE_ALIGNMENT[key].BRUTTOVM = item["@MeasureDimension"].rawValue; 
                }
                if ( item["@MeasureDimension"].id === "AARDEFXFG5H44AYFXWM7G7UWX" )
                {
                    this.DB_MEASURE_ALIGNMENT[key].AUSLASTUNG3 = item["@MeasureDimension"].rawValue; 
                }
            } else {
                if ( item["@MeasureDimension"].id === "AARDEFXFG5H44AW9I0Y5JLH89" )
                {
                    this.DB_MEASURE_ALIGNMENT[key].NETTO3 = item["@MeasureDimension"].rawValue; 
                }
                if ( item["@MeasureDimension"].id === "AARDEFXFG5H44AYFXWM7G7I9T" )
                {
                    this.DB_MEASURE_ALIGNMENT[key].AUSLASTUNG1 = item["@MeasureDimension"].rawValue; 
                }
                if ( item["@MeasureDimension"].id === "1YI3PISYH11GEYJ46340IO3RO" )
                {
                    this.DB_MEASURE_ALIGNMENT[key].BRUTTOVM = item["@MeasureDimension"].rawValue; 
                }
                if ( item["@MeasureDimension"].id === "AARDEFXFG5H44AYFXWM7G7UWX" )
                {
                    this.DB_MEASURE_ALIGNMENT[key].AUSLASTUNG3 = item["@MeasureDimension"].rawValue; 
                }
            }
        }, Object.create(null));

        

          const DB_ROW_ALIGNMENT = Object.create(null);
          Object.keys(this.DB_MEASURE_ALIGNMENT).forEach( itemkey => {
                const item = this.DB_MEASURE_ALIGNMENT[itemkey];
                const key = `${item.SQID}_${item.SLATIT}_${item.SLONGD}`;
                if (DB_ROW_ALIGNMENT[key] === undefined) {
                  DB_ROW_ALIGNMENT[key] = Object.create(null);
                  DB_ROW_ALIGNMENT[key].SQID = item.SQID;
                  DB_ROW_ALIGNMENT[key].SLATIT = item.SLATIT;
                  DB_ROW_ALIGNMENT[key].SLONGD = item.SLONGD;
                  DB_ROW_ALIGNMENT[key].items = [];
                  DB_ROW_ALIGNMENT[key].items.push(item);
                } else {
                  DB_ROW_ALIGNMENT[key].items.push(item); // Add item to existing key
                }
          }, Object.create(null));
          this.DB_COORDINATE_TABLE_DATA = DB_ROW_ALIGNMENT;
          this.DB_MEASURE_ALIGNMENT = Object.create(null);
          if (this.mapType === 'google') {
              this.gMap_updateInfoWindow(this.gMap_present_marker.itemkey, 0);
          } else if (this.mapType === 'osm') {
             // this.osMap_updateInfoWindow(this.osMap_present_marker.itemkey, 0);
          }
    }



    gMap_updateInfoWindow(marker_itemkey,item_idx) {
            let tableContent = this.fe_generateTableContent(marker_itemkey, item_idx);
            infoWindow.setContent(tableContent);
            google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
                // console.log("reached domready");
                setTimeout(() => {
                const navContainer = this.shadowRoot.querySelector(`#${this.mapType}-nav-buttons`);
                    if (navContainer) {
                const itemCounter =  navContainer.querySelector("#itemCounter");
                const nextBtn =  navContainer.querySelector("#nextItem"); 
                const prevBtn =  navContainer.querySelector("#prevItem");
                if (nextBtn) {
                    //  console.log("DEBUG: 'nextItem' button found.");
                    nextBtn.addEventListener("click", () => {
                        //   console.log("Next button clicked");
                        if (item_idx < this.DB_COORDINATE_DATA[marker_itemkey].items.length - 1) {
                            item_idx++;
                            itemCounter.textContent = `${item_idx + 1} / ${this.DB_COORDINATE_DATA[marker_itemkey].items.length}`;
                            updateInfoWindow(marker_itemkey); // Call helper to update content and re-attach
                        }
                    });
                }
                if (prevBtn) {
                    //  console.log("DEBUG: 'prev' button found.");
                    prevBtn.addEventListener("click", () => {
                        //   console.log("Previous button clicked");
                        if (item_idx > 0) {
                            item_idx--;
                            itemCounter.textContent = `${item_idx + 1} / ${this.DB_COORDINATE_DATA[marker_itemkey].items.length}`;
                            updateInfoWindow(marker_itemkey); // Call helper to update content and re-attach
                        }
                    });
                }
                    }
            },50);
            });
        };
    


/** Below code represents the Table structure for the popup content. This can be edited based on requirement */
    // Table content generator
    fe_generateTableContent(itemkey,idx) {
        let dataPoint = this.DB_COORDINATE_TABLE_DATA[itemkey];
        let image_Url = image_url_prefix + dataPoint.items[0].SDAWN;
        const navButtons = dataPoint.items.length > 1
        ? 
        `
          <div id="${this.mapType}-nav-buttons" style="text-align:center; margin-top:10px;">
            <button id="prevItem" ${idx===0?'disabled':''}>&laquo; Back</button>
            <span id="itemCounter" style="margin: 0 10px;">${idx + 1} / ${dataPoint.items.length}</span>
            <button id="nextItem" ${idx===dataPoint.items.length-1?'disabled':''}>Next &raquo;</button>
          </div>
        `
        : '';
        return `
        <style type="text/css">
        .tg  {border-collapse:collapse;border-spacing:0;min-width:110px}
        .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
        overflow:hidden;padding:0px 2px;word-break:normal;}
        .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
        font-weight:normal;overflow:hidden;word-break:normal;}
        .tg .rowimage{text-align:center;vertical-align:top;}
        .tg .rowimage img {display: block;margin: 0 auto;padding: 3px;}
        .tg .row1{border-color:#000000;font-weight:bold;text-align:center;vertical-align:middle;padding: 3px;}
        .tg .row23{font-weight:bold;text-align:center;vertical-align:middle;padding: 3px;}
        .tg .rowcoltextheader{text-align:left;font-weight:bold;vertical-align:middle ;padding: 5px 5px;min-width: 110px;}
        .tg .rowcoltext{text-align:left;vertical-align:middle ;padding: 5px 5px;min-width: 110px;}
        .tg .rowcolnum{text-align:right;vertical-align:middle ;padding: 5px 5px;}
        </style>
        <table class="tg">
        <thead>
        <tr>
            <th class="row1" colspan="4">QID: ${Number(dataPoint.SQID)}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="row23" colspan="4">WTN: ${dataPoint.items[idx].SWERBETID}</td>
        </tr>
        <tr>
            <td class="row23" colspan="4">${dataPoint.items[idx].SDESCRIPT},<br> ${dataPoint.items[idx].SOKZ} </td>
        </tr>
        <tr>
        <td class="rowimage" colspan="4"><img src="${image_Url}" alt="Image"></td>
        </tr>
        <tr>
            <td class="rowcoltextheader">Anbietergruppe:</td>
            <td class="rowcoltext">${dataPoint.items[idx].SAU}</td>
            <td class="rowcoltextheader">Brutto VM:</td>
            <td class="rowcolnum">${Number(dataPoint.items[idx].NETTO3).toLocaleString("de-DE", {style:"currency", currency:"EUR"})}</td>
        </tr>
        <tr>
            <td class="rowcoltextheader">Warengruppe:</td>
            <td class="rowcoltext">${dataPoint.items[idx].SWARENG3}</td>
            <td class="rowcoltextheader">Netto 3 Umsatz:</td>
            <td class="rowcolnum">${Number(dataPoint.items[idx].BRUTTOVM).toLocaleString("de-DE", {style:"currency", currency:"EUR"})}</td>
        </tr>
        <tr>
            <td class="rowcoltextheader">PPS:</td>
            <td class="rowcolnum">${Number(dataPoint.items[idx].SPPSW) === 0 ? '' : Number(dataPoint.items[idx].SPPSW)}</td>
            <td class="rowcoltextheader">Auslastung 1:</td>
            <td class="rowcolnum">${Number(dataPoint.items[idx].AUSLASTUNG1).toFixed(2)}%</td>
        </tr>
        <tr>
            <td class="rowcoltextheader">Tagespreis:</td>
            <td class="rowcolnum">${Number(dataPoint.items[idx].STAGPR).toLocaleString("de-DE", {style:"currency", currency:"EUR"})}</td>
            <td class="rowcoltextheader">Auslastung 3:</td>
            <td class="rowcolnum">${Number(dataPoint.items[idx].AUSLASTUNG3).toFixed(2)}%</td>
        </tr>
        </tbody>
        </table>
        ${navButtons}
    `;
    }  
}

customElements.define('custom-mapsnew-test', CombinedMap);
})();
