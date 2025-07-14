---
title: First Order Logic
draft: false
tags:
  - logic
---
## First Order Languages
It is a triple $L = (R,F,C)$ where 
		$R = \{r_1, r_2, ..\}$ is a countable set of relation symbols
	$F$ is a countable set of function symbols
	 C is a countable set of constant symbols
	 $\#(r)$ , $\#(f)$: *arity* of $r \in R$ , $f \in F$ , indicating how many arguments the symbol takes

 $Var$ is a countable set of variables.

## Terms
The set of terms over $L$ is the smallest set satisfying the following conditions:
	- Every constant symbol is a term
	- Every variable is a term
	- Let $t_1, t_2 , .., t_n$ be terms over L and let $f \in F$ be a function symbol of arity n, then $f(t_1, t_2, .., t_n)$ is a term

A term which does not contain any variables is called a closed term.

## Atomic formulas
- Let $r \in R, \#(r)=n$ and let $t_1, .., t_n$ be terms over L. Then $r(t_1, .., t_n)$ is an atomic formula.
- Let $t_1, t_2$ terms over L. Then $t_1 \equiv t_2$ is an atomic formula

Second type of atomic formula asserts that 