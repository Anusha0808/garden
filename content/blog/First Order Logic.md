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

Think of a term as a name.

>[!info] Expressions
>Any finite sequence of elements of L and basic symbols (connectives, quantifiers) forms an expression. 
>Terms are meaningful expressions,

## Atomic formulas
- Let $r \in R, \#(r)=n$ and let $t_1, .., t_n$ be terms over L. Then $r(t_1, .., t_n)$ is an atomic formula.
- Let $t_1, t_2$ terms over L. Then $t_1 \equiv t_2$ is an atomic formula

Second type of atomic formula asserts that these two terms/names are equivalent.

Relation symbols are also called predicates.
So atomic formulas act as atomic propositions or basic facts about the first order logic. A relation $r(t_1, .., t_n)$ will be either true or false after some structure is given to the first order language. Similarly, $t_1 \equiv t_2$ will be either true or false.

So atomic formulas, in an essence, capture how the terms are/can be related to each other in our language. For example, a relation symbol could be $married$ with arity two. It takes in 2 names and tells if they are married. 

## Structures
A structure for $L$ is a pair $\mathfrak{M} = <M, F>$ where $M$ is a non empty set and $F$ is an operation with domain $L$ such that, writing $x^{\mathfrak{M}} := F(x)$:
-  $x=R$ , n-ary, then $M^n \supseteq R^{\mathfrak{M}}$  
- $x=f$ , n-ary, then $f^{\mathfrak{M}}: M^n \rightarrow M$  
- $x=c$ then $c^{\mathfrak{M}} \in M$

So , the predicates/relation symbols get assigned the proper "elements" that constitute each relation.
The functions are also made precise, that is, proper definition is given to each function because of the structure.
And the constants are given their values.

### Assignment $\sigma$
An assignment in $\mathfrak{M}$ is a function with the domain set of variables of $L$ and range a subset of $M$.
## First order Formulas
They form the smallest set of expressions containing the atomic formulas and closed under the following formation rules:
>Formation rules
>If $\phi , \psi$ are formulas , $v$ variable
>i) the expressions $\lnot \phi, (\phi \land \psi), (\phi \lor \psi) , (\phi \rightarrow \psi)$ are also formulas.
>ii) $(\exists v \phi), (\forall v \phi)$ are also formulas.

We associate parantheses to the right in strings where the sane symbol is repeated. (right associativity within same symbols)


### First Order sentence
A formula without any free variables.

## Satisfaction
Let $\mathfrak{M}$ be an $L$ structure. We define the relation 
$$
\mathfrak{M} \models \phi[s]
$$
(to be read as : the assignment $s$ satisfies the formula $\phi$ in $\mathfrak{M}$) for all assignments s and for all formulas $\phi$ as follows:
> i) $\mathfrak{M} \models (t_1 \equiv t_2) \text{ iff } t_1^{\mathfrak{M}}(s) = t_2^{\mathfrak{M}}(s)$ 
