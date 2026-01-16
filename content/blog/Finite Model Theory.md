---
title: Finite Model Theory
draft: false
tags:
  - logic
date: 16 Jan, 2026
---
# Resources 
- FMT by Libkin
- [Lecures on FMT by Szymtor](https://duch.mimuw.edu.pl/~szymtor/fmt.pdf)

# Things I am looking forward to learn 
- Descriptive Logic 
- Fixed point logic

# dump on random insights
## We only talk about relational structures
![[Pasted image 20260116164943.png]]
For example, suppose  our finite structure also contains a function symbol $f$. Then we want to expand the formula $\phi$ to "represent" $f$.

$f$ can be represented by a relation $r$ with an extra condition that $\forall x \exists y \forall z ( r(x,y) \wedge y \lnot = z )=> \lnot r(x,z)$

the following condition also captures uniqueness of an element x being related to an element y but it does not force all x being related to something.
$\forall x \forall y \forall z ( r(x,y) \wedge y \lnot = z )=> \lnot r(x,z)$

therefore it is enough to talk about relational structures.
If a relation is not of arity 2, then we can easily extend $\phi$ to capture relations  of arity > 2 as well.

## 
