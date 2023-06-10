---
title: Pump and Dump Contracts
date: 2023-06-10
image: /Image/Pump-and-Dump.jpg
---

# Pump and Dump

The most recent contracts out are the classic P&D contracts. They're designed for the contract to sell tokens to investors as the token gains traction.

Part of the transfer function:

```solidity
uint256 contractTokenBalance =
balanceOf(address(this));
if (!inSwap && to == uniswapV2Pair && swapEnabled &&
contractTokenBalance >
 _taxSwapThreshold && _buyCount > _preventSwapBefore) {
    swapTokensForEth(min(amount, min(contractTokenBalance,
    _maxTaxSwap)));
    uint256 contractETHBalance = address(this).balance;
    if (contractETHBalance > 0) {
        sendETHToFee(address(this).balance);
    }
}
```

So what does this all mean? Well, let me break it down for you so it's simple:

1. The contract is created for the sole purpose of swapping tokens for ETH, which dumps on holders.
2. They transfer the tokens from the deployer wallet to the contract. The most common amount is a supply of 1,000,000.
3. Once the tokens are in the contract, they then send 1 ETH for LP (liquidity pool).
4. The `openTrading` function is then executed. This creates the LP pairing Token A to Token B (ETH), making it possible to trade.
5. Not all the tokens go into the liquidity pool. This variable is in the code: `uint256 private _preventSwapBefore = 20;` It holds back a percentage of supply in the contract.
6. Now the token is live, and people can buy and sell. But the contract has code inside that will swap the tokens held by the contract to ETH. This will dump on all investors until it is depleted.

```solidity
swapTokensForEth(min(amount, min(contractTokenBalance, _maxTaxSwap)));
uint256 contractETHBalance = address(this).balance;
if (contractETHBalance > 0) {
    sendETHToFee(address(this).balance);
}
```

7. The ETH gained from the tokens that were sold by the contract goes to the deployer's wallet. Which you can see in the last line of the above code.

So now the question is, are all of these contracts P&D? Well, this all comes down to the team. Easy signs to look for to check if it's a pump and dump:

- No website
- No portal in TG
- No Twitter
- Buybot setup but they leave the 🟢 Emoji on
- No Buygif
- No team
- Chat stays locked for ages

- Once the CA has finished selling, mods and team not in chat
- Only Eth trending paid for.

So the biggest question is, can or should you trade them? Well, yes, but only if you get in right at the start. You have to be in no later than 10k MC to make gains, but the name needs to be bullish, and it will just be a quick flip. The team doesn't plan on sticking around, so neither should you.

## YOU CAN MAKE $ FROM THESE PLAYS; YOU JUST NEED TO UNDERSTAND THEM
