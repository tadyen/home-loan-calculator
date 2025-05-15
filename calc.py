#!/usr/bin/env python3

def calc_monthly(L,N,R):
    """
    Calculate the monthly payment for a loan.

    Parameters:
    L (float): Loan amount
    N (int): Number of payments (months)
    R (float): Interest rate per annum (p.a.) in percent
    """

    match R:
        case 0:
            return L / N
        case _:
            r = 1 + (R / 100) / 12
            return L * (r ** N) * (r - 1) / ((r ** N) - 1)


def calc(L,N,R) -> tuple[float, float, float]:
    monthly = calc_monthly(L, N, R)
    total = monthly * N
    interest = total - L
    print(f"Loan: {L}, Months: {N}, Rate %p.a.: {R}")
    print(f"Monthly payment: {monthly:.2f}")
    print(f"Total payment: {total:.2f}")
    print(f"Interest: {interest:.2f}")    
    return monthly, total, interest

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 4:
        print("Usage: calc.py <loan> <months> <rate>")
        sys.exit(1)
    try:
        L = float(sys.argv[1])
        N = int(sys.argv[2])
        R = float(sys.argv[3])
    except ValueError:
        print("Invalid input. Please enter a valid loan amount, number of months, and interest rate.")
        sys.exit(1)
    calc(L, N, R)
