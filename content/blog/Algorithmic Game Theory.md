---
title: Algorithmic Game Theory
draft: false
tags:
  - agth
  - coursework
date: 15 October, 2025
---
# Mechanism design
## Class : 15th October, 2025
Reference : https://theory.stanford.edu/~tim/f13/l/l3.pdf 
### Sealed Bid Auctions
n agents, one seller
private valuations  $v_i , i \in [n]$
X : set of feasible allocations

the above forms a single parameter constraint
Allocation and payment rules:
	1 ) collect bids b_i
	2) Allocation rule x(b) \in X
	3) Payment rule p(b) \in R^n
Utility : u_i(b) = v_ix_i(b) - p_i(b)
we want p_i(b) \in [0, b_ix_i(b)]

>[!note] Defintion : Implementable allocation rule
>AN allocation rule X is implementable if \exists a payment rule p st the sealed bid auction (X,p) is a DSIC
>

>[!note] Monotone Allocation rule
>AN allocation rule X is monotone if $x_i(z,b_i) \geq x_i(y, b_{-i})) \forall z \geq y$

Desired properties of an auction:
1) DSIC : truthful bidding must be  a dominant strategy.
2) Strong performance gurantee : Maximize $\sum x_iv_i$ social surplus
3) Polytime computability
#### Sponsored search auction
n agents, k slots, i^th slot has click through rate \alpha_i
Valuations v_j, Agent j derives value \alpha_i v_j if i^th slot is alloted to j


>[!note] Myserson's Lemma
>1) An Allocation rule is implementable iff it is monotone
>2) For any implementable allocation rule , there exists a unique pricing rule p st (x,p) is DSIC
>3) p is given by an explicit formula 

Did the proof, check the reference.
