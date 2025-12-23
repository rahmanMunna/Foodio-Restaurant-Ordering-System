export default function Steps({ orderStatus }) {
    return (
        <ul className="steps steps-vertical lg:steps-horizontal">
            <li className={`step ${orderStatus.id >= 1 ? 'step-primary' : ''}`}>
                Pending
            </li>

            <li className={`step ${orderStatus.id >= 2 ? 'step-primary' : ''}`}>
                Preparing
            </li>

            <li className={`step ${orderStatus.id >= 3 ? 'step-primary' : ''}`}>
                Ready
            </li>

            <li className={`step ${orderStatus.id >= 4 ? 'step-primary' : ''}`}>
                Completed
            </li>
        </ul>
    );
}
