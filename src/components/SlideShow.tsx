import style from '../styles/components/SlideShow.module.css';

export function SlideShow() {
    return (
        <div className={style.slideshowContainer}>
            <header>
                <div>
                    <img src="/bg4.jpg" alt="Raian"/>
                </div>
            </header>
        </div>
    );
}