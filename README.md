# home-loan-calculator
simple home loan calculator

## some maths

Let:
- L = Loan amount (Initial balance)
- B = Balance
- r = Interest rate (per payment period)
- P = Payment amount (per payment period)
- N = Number of payments (Number of payment periods)
- T = Total payment by the end of repayment

Then we have the following equations:

- $B(0) = L$  initial balance
- $B(N) = 0$  final balance
- $B(n) = B(n-1) - P + r * B(n-1)$  Previous balance - payment + interest over previous balance

Tidying it up:

Let 
$\rho = 1 + r$

$$
\begin{align*}
B(n) & = B(n-1) - P \times B(n-1) \\
& = B(n-1) \times \rho - P \\
\end{align*}
$$

Mathematical induction:

1. $B(n+1) = B(n) \times \rho - P$

2. 
$$
\begin{align*}
B(n+2) & = B(n+1) \times \rho - P \\
& = (B(n) \times \rho - P) \times \rho - P \\
& = B(n) \times \rho^2 - P ( 1 + \rho) \\
\end{align*}
$$

3.
$$
\begin{align*}
B(n+3) & = B(n+2) \times \rho - P \\
& = (B(n) \times \rho^2 - P ( 1 + \rho)) \times \rho - P \\
& = B(n) \times \rho^3 - P ( 1 + \rho + \rho^2) \\
\end{align*}
$$

4.
$$
\begin{align*}
B(n+k) & = B(n) \times \rho^{k} - P ( 1 + \rho + \rho^2 + ... + \rho^{k-1}) \\
& = B(n) \times \rho^{k} - P \frac{(1 - \rho^k)}{(1 - \rho)} \\ \text{(geometric series)}
\end{align*}
$$

Given the boundary conditions:

$B(0) = L$ and $B(N) = 0$

Thus:

$$
\begin{align*}
B(N) & = B(0 + N) \\
& = B(0) \times \rho^{N} - P \frac{(1 - \rho^N)}{(1 - \rho)} \\
& = L \times \rho^{N} - P \frac{(1 - \rho^N)}{(1 - \rho)} \\
& = 0 \\
\end{align*}
$$

Rearranging gives us:

$$ P = L * \rho^{N} \times \frac{(1 - \rho^N)}{(1 - \rho)} $$


## code

there is a python script here that can be used.


## webui

might make one. tbd




