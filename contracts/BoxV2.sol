//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract BoxV2 {
    uint256 public val;

    function inc(uint256 _val) external {
        val += _val;
    }
}
