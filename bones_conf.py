pkg_name = "nengo_dl"
repo_name = "nengo/nengo-dl"
pypi_user = "drasmuss"

# ci script config
script_config = {
    "static": {
        "pip_install": ["-e .[all]"],
        "conda_install": ["pandoc"]},
    "test": {
        "pip_install": [
            "-e .[tests] $NUMPY_VERSION $TF_VERSION $NENGO_VERSION"],
        "nengo_tests": True},
    "examples": {
        "pip_install": ["-e .[all]"],
        "custom_commands": ["python docs/whitepaper/whitepaper2018_code.py > /dev/null"]},
    "docs": {
        "pip_install": ["-e .[docs]"],
        "conda_install": ["pandoc"]
    }
}

# travis.yml config
python_version = "3.6"
global_vars = {
    "NUMPY_VERSION": "numpy",
    "TF_VERSION": "tensorflow",
    "NENGO_VERSION": "nengo",
}
jobs = [
    {"script": "static"},
    {"script": "docs"},
    {"script": "test", "cache": "false"},
    {"script": "test", "coverage": True,
     "env": {"NENGO_VERSION": "git+https://github.com/nengo/nengo.git",
             "TF_VERSION": "tensorflow<2.0 --pre"}},
    {"script": "test", "coverage": True,
     "python_version": "3.4",
     "env": {"NENGO_VERSION": "nengo==2.7.0",
             "TF_VERSION": "tensorflow==1.4.0",
             "PIP_UPGRADE_STRATEGY": "only-if-needed"}},
    {"script": "test", "test_args": "--dtype float64 --simulator-only"},
    {"script": "test", "test_args": "--unroll_simulation 5 --simulator-only"},
    {"script": "test", "test_args": "--inference-only --simulator-only"},
    {"script": "examples", "language": "generic"},
    # TODO: deploy
]
