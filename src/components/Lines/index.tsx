import style from './style.module.css';

export function Lines() {

  return (
    <>
      <div className={style.lines}>

        <div className={style.line}>
          <div className={`${style.letter} ${style.correct}`}>K</div>
          <div className={`${style.letter} ${style.warning}`}>A</div>
          <div className={style.letter}>R</div>
          <div className={style.letter}>M</div>
          <div className={`${style.letter} ${style.warning}`}>A</div>
        </div>

        <div className={style.line}>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
        </div>


        <div className={style.line}>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
        </div>


        <div className={style.line}>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
        </div>


        <div className={style.line}>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
        </div>


        <div className={style.line}>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
          <div className={style.disabledLetter}></div>
        </div>

      </div>
    </>
  );
}