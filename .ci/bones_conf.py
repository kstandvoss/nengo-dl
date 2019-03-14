pkg_name = "nengo_dl"
repo_name = "nengo/nengo-dl"

# ci script config
script_config = {
    "static": {
        "pip_install": ["-e .[docs]"],
        "conda_install": ["pandoc"]},
    "test": {
        "pip_install": [
            "-e .[tests] $NUMPY_VERSION $TF_VERSION $NENGO_VERSION"],
        "nengo_tests": True},
    "examples": {
        "pip_install": ["-e .[docs]"],
        "custom_commands": ["python docs/whitepaper/whitepaper2018_code.py > /dev/null"]},
    "docs": {
        "pip_install": ["-e .[docs]"],
        "conda_install": ["pandoc"]
    }
}
