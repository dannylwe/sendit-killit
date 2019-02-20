{
    "testMatch": ["sendit-killit/tests/unit/*.js"],
    "setupFiles": ["sendit-killit/tests/setup.js"],
    "transform": {".*": "sendit-killit/node_modules/babel-jest"},
    "moduleFileExtensions": ["js"],
    "collectCoverageFrom": [
      "src/*.js",
      "!src/index.js" //exclude files
    ]
}