import "../../styles/clockStyles.css"

function padDigit(num, length = 6) {
    return String(num).padStart(length, "0").split("");
}

export default function Flipclock({seconds}) {
    const digits = padDigit(seconds);

    return (
        <div className="counter-container">
            <div className="counter-digit counter-icon">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            </div>

            {digits.map((digit, i) => (
                <div key={i} className="counter-digit">
                    {digit}
                </div>
            ))}
        </div>
    );
}