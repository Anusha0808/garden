---
title: <% tp.file.title %>
draft: true
tags:
date:
---
I am reading this from Tom Leinster's Book.
# Diagram of a shape
Let I be a small/finite category. A diagram of a shape I in a category C is a functor $J:I \rightarrow C$ 

Think of I as a shape/index category. and of C the target category m, J as the collection of morphisms /objects in C

# cone
Let J : I -> C be a diagram of shape I in C. A cone to J is given by a pair (C, /alpha) of an object C and a family of morphims L_I : C -> J(I) in C indexed by objects I \in Ob(I), such that for any morphism, i : I -> I' m we have that J(i) 
incompleete
insert diagram

# limit
a limit of the diagram J is given by a cone to J (L, \lambda) such that for every cone (C, \alpha ) to J, there exists a unique morphism l : C -> L such that L_I = \lamba_I \cdot l \forall I in Ob(I). The morphism l is called mediating.


## Example
Let C be a category with a terminal object 1. Then 1 is the imit of the empty diagram J: \phi -> C and vice a versa
a cone to J is just an object C


Let I = two objects with self loops  = 2
A diagram of shape 2 , J : 2 -> C can be identified with a pair of onbjects (A_1, A_2) of C
A cone to J is an object C \in Ob(C) and two morphisms f : C =-> A_1 , g  A_2

A limit of J is an object L with orphosms pi_1 : L -> A_1 

...

Prop 
Let J : I -> C be a diagram of shape I into C
If (L, \lambda) and (L', \lambda') are limits of J, then the mediating morphism l' : L -> L' is an isomorphism inverse l : L' -> L the other mediating morphisms.



Example :
Let I be {1, 2} m {1->1 , 2->2, 1->2, 1-> 2}
A diagram of shape I, J L I -> C is determined by {X,Y} {f,g:X->Y}
A cone is determined by a single morphism \alpha : C -> X, such that the diagram C --> \alpha X ---> f,g Y commutes

the other morphism \alpha_Y: C-> Y has to be the composition

A limit to J is determined by an object E and a morphism e : E -> X such that f \cdot e = g \cdot e, and such that for any object C and morphism \alpha : C -> X with f \cdot \alpha = g \cdot \alpha, we have a unique morphism l : C -> E such that \alpha = e\cdot l

he mentioned equalizers!!
limits of this shape are called equalisers.

break


second part of the class

Let I be a small discrete category (only identity morphisns). (I can be a set for example)
Limits of shape I are called (small) products.
A diagram of shape I, J: I -> C can be identified with a collection of objects $\{C_i\}_{i \in I}$
A cone (C, alpha) is simply a collection \alpha_i : C -> C_i of morphisms ordered by I
The limit is therefore a pair $(\prod_{i \in I} C_i, \pi_j : \prod_{i\in I} C_i \rightarrow C_j)$ 

where the first thing is an. object in Cm the second thung is a morphism for every cone (C, \alpha) there exists a unique morphism, $<\alpha_j>_{j \in I}: C \rightarrow \prod C_i$ 

such that the diagram commutes 


Example
In Set, small products are given by the cartesian product.


Def : A functor F: C -> D preserves small limits whenever (L,\lambda) is a limit for a small diagram J: I -> C then (F)
 examples
 

co limit
co cone
co universal construction

A category C has small limits iff C has small products and equalizers 


---
tags:
  - category-theory
  - limits
  - notes
date: 2026-09-22
---

# Lecture Notes: Diagrams, Limits, and Colimits


---

## 1. Diagrams and Cones

### Definition: Diagram of a Shape
Let $I$ be a small index category (often called a shape category). A **diagram of shape $I$** in a category $\mathcal{C}$ is a functor $J: I \to \mathcal{C}$.

> **Intuition:** Think of $I$ as an indexing template or shape, $\mathcal{C}$ as the target category, and $J$ as picking out a specific collection of objects and morphisms in $\mathcal{C}$ arranged according to the shape $I$.

### Definition: Cone
Let $J: I \to \mathcal{C}$ be a diagram of shape $I$ in $\mathcal{C}$. A **cone** to $J$ is a pair $(C, \alpha)$ consisting of:
1. An object $C \in \operatorname{Ob}(\mathcal{C})$, called the **apex** of the cone.
2. A family of morphisms $\alpha_I: C \to J(I)$ in $\mathcal{C}$ indexed by objects $I \in \operatorname{Ob}(I)$, called the **legs** of the cone.

This family must satisfy the **cone condition**: for any morphism $i: I \to I'$ in $I$, the diagram commutes ($J(i) \circ \alpha_I = \alpha_{I'}$):

$$\begin{array}{ccc}
 & C & \\
 & \swarrow \alpha_I \quad \searrow \alpha_{I'} & \\
J(I) & \xrightarrow{\quad J(i) \quad} & J(I')
\end{array}$$

---

## 2. Limits

### Definition: Limit
A **limit** of a diagram $J: I \to \mathcal{C}$ is a universal cone $(L, \lambda)$ to $J$. 

This means that for every cone $(C, \alpha)$ to $J$, there exists a **unique mediating morphism** $l: C \to L$ such that for all $I \in \operatorname{Ob}(I)$, the diagram commutes ($\alpha_I = \lambda_I \circ l$):

$$\begin{array}{ccccc}
 & & C & & \\
 & \swarrow \alpha_I & \Big\downarrow \exists! l & \searrow \alpha_{I'} & \\
 & & L & & \\
 & \swarrow \lambda_I & & \searrow \lambda_{I'} & \\
J(I) & & \xrightarrow{\quad J(i) \quad} & & J(I')
\end{array}$$

---

## 3. Examples of Shapes and Limits

### Example 1: Empty Category $\emptyset$
Let $I = \emptyset$ be the empty category.
- A diagram $J: \emptyset \to \mathcal{C}$ contains no objects or morphisms.
- A cone to $J$ is simply an object $C \in \operatorname{Ob}(\mathcal{C})$ (with no legs required).
- The limit of the empty diagram is an object $L$ such that for every object $C$, there exists a unique morphism $l: C \to L$. 
- Thus, the limit of the empty diagram is a **terminal object** $1 \in \operatorname{Ob}(\mathcal{C})$.

$$\begin{array}{c}
C \\
\Big\downarrow \exists! l \\
1
\end{array}$$

### Example 2: Discrete Category of Two Objects
Let $I = \mathbf{2}$ be a discrete category with two objects $\{1, 2\}$ and only identity morphisms.
- A diagram $J: \mathbf{2} \to \mathcal{C}$ selects a pair of objects $(A_1, A_2)$ in $\mathcal{C}$.
- A cone to $J$ consists of an object $C$ and two morphisms $f_1: C \to A_1$ and $f_2: C \to A_2$.
- The limit is the **binary product** $(A_1 \times A_2, \pi_1, \pi_2)$, equipped with canonical projection morphisms $\pi_1: A_1 \times A_2 \to A_1$ and $\pi_2: A_1 \times A_2 \to A_2$:

$$\begin{array}{ccccc}
 & & C & & \\
 & \swarrow f_1 & \Big\downarrow \exists! \langle f_1, f_2 \rangle & \searrow f_2 & \\
 & & A_1 \times A_2 & & \\
 & \swarrow \pi_1 & & \searrow \pi_2 & \\
A_1 & & & & A_2
\end{array}$$

### Example 3: Parallel Pair (Equalizers)
Let $I$ be the category with two objects $\{1, 2\}$ and two parallel non-identity morphisms $u, v: 1 \to 2$.
- A diagram $J: I \to \mathcal{C}$ selects two objects $X, Y$ and two parallel morphisms $f, g: X \to Y$.
- A cone to $J$ is determined by a single morphism $\alpha: C \to X$ such that $f \circ \alpha = g \circ \alpha$ (the leg $\alpha_Y: C \to Y$ is forced to be $f \circ \alpha$).

$$\begin{array}{rcccl}
C & \xrightarrow{\quad \alpha \quad} & X & \begin{array}{c} \xrightarrow{f} \\ \xrightarrow[g]{} \end{array} & Y
\end{array}$$

- The limit of this shape is called an **equalizer**. It consists of an object $E$ and a morphism $e: E \to X$ such that:
  1. $f \circ e = g \circ e$
  2. For any object $C$ and morphism $\alpha: C \to X$ with $f \circ \alpha = g \circ \alpha$, there exists a unique mediating morphism $l: C \to E$ satisfying $\alpha = e \circ l$:

$$\begin{array}{ccccccc}
C & \xrightarrow{\quad \exists! l \quad} & E & \xrightarrow{\quad e \quad} & X & \begin{array}{c} \xrightarrow{f} \\ \xrightarrow[g]{} \end{array} & Y \\
 & \searrow & & \swarrow \alpha & & & \\
 & & X & & & &
\end{array}$$

---

## 4. Uniqueness of Limits up to Isomorphism

### Proposition
Let $J: I \to \mathcal{C}$ be a diagram of shape $I$. If $(L, \lambda)$ and $(L', \lambda')$ are both limits of $J$, then the unique mediating morphism $l': L \to L'$ is an isomorphism, with inverse given by the mediating morphism $l: L' \to L$.

$$\begin{array}{ccc}
L & \xrightleftharpoons[\quad l \quad]{\quad l' \quad} & L' \\
 & \searrow \lambda_I \quad \swarrow \lambda'_I & \\
 & J(I) & 
\end{array}$$

---

## 5. Small Products and Preservation

### Definition: Small Product
Let $I$ be a small discrete category (no non-identity morphisms). Limits of shape $I$ are called **(small) products**.
- A diagram $J: I \to \mathcal{C}$ is a family of objects $\{C_i\}_{i \in I}$.
- A cone $(C, \alpha)$ is a family of morphisms $\alpha_i: C \to C_i$ for each $i \in I$.
- The limit is the pair:
  $$\left( \prod_{i \in I} C_i, \; \left( \pi_j: \prod_{i \in I} C_i \to C_j \right)_{j \in I} \right)$$
- Universal property: for every cone $(C, (\alpha_j)_{j \in I})$, there exists a unique morphism $\langle \alpha_j \rangle_{j \in I}: C \to \prod_{i \in I} C_i$ making all triangles commute:

$$\begin{array}{ccc}
C & \xrightarrow{\quad \exists! \langle \alpha_j \rangle_{j \in I} \quad} & \prod_{i \in I} C_i \\
 & \searrow \alpha_j \qquad \swarrow \pi_j & \\
 & C_j & 
\end{array}$$

#### Concrete Example
In $\mathbf{Set}$, small products are given by the standard **Cartesian product**:
$$\prod_{i \in I} C_i = \{ (c_i)_{i \in I} \mid c_i \in C_i \}$$

---

### Definition: Preservation of Limits
A functor $F: \mathcal{C} \to \mathcal{D}$ **preserves small limits** if whenever $(L, \lambda)$ is a limit for a small diagram $J: I \to \mathcal{C}$, the cone $(F(L), F(\lambda))$ is a limit for the composite diagram $F \circ J: I \to \mathcal{D}$ in $\mathcal{D}$.

---

## 6. Duality & Existence Theorem

### Dual Concepts
By reversing all arrows in the definitions above, we obtain dual concepts:
- **Cocone:** A family of morphisms $J(I) \to C$.
- **Colimit:** A universal cocone to a diagram $J: I \to \mathcal{C}$.

### Fundamental Theorem of Limits
> **Theorem:** A category $\mathcal{C}$ has all small limits (i.e., is **complete**) if and only if $\mathcal{C}$ has all **small products** and **equalizers**.

---
