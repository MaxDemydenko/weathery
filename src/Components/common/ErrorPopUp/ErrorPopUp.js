import React from 'react';
import s from './ErrorPopUp.module.css';

export const ErrorPopUp = ({errorText}) => {
    return <div className={s.errorTextWrapper}>
        <div className={s.errorIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="m117.18 31.592c-5.595-9.586-13.185-17.18-22.771-22.771-9.588-5.595-20.06-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.18 13.184-22.772 22.771-5.596 9.587-8.393 20.06-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.18 22.772 22.771 9.587 5.595 20.06 8.392 31.408 8.392 11.352 0 21.822-2.797 31.408-8.392 9.586-5.594 17.18-13.185 22.771-22.771 5.594-9.587 8.391-20.06 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408m-24.687 46.15c1.032 1.031 1.549 2.255 1.549 3.667 0 1.466-.517 2.716-1.549 3.747l-7.332 7.333c-1.032 1.032-2.281 1.548-3.748 1.548-1.412 0-2.636-.516-3.666-1.548l-14.747-14.747-14.747 14.747c-1.032 1.032-2.254 1.548-3.666 1.548-1.467 0-2.716-.516-3.748-1.548l-7.333-7.333c-1.032-1.031-1.548-2.281-1.548-3.747 0-1.412.516-2.636 1.548-3.667l14.747-14.746-14.747-14.747c-1.032-1.031-1.548-2.254-1.548-3.666 0-1.467.516-2.716 1.548-3.748l7.333-7.332c1.032-1.032 2.281-1.548 3.748-1.548 1.412 0 2.634.516 3.666 1.548l14.747 14.746 14.747-14.746c1.03-1.032 2.254-1.548 3.666-1.548 1.467 0 2.716.516 3.748 1.548l7.332 7.332c1.032 1.032 1.549 2.281 1.549 3.748 0 1.412-.517 2.635-1.549 3.666l-14.746 14.747 14.746 14.746" transform="matrix(.12785 0 0 .12785 2.95 2.948)" fill="#da4453"/></svg>
        </div>
        <div className={s.errorText}>
            {errorText}
        </div>
    </div>
}