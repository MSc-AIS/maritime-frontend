import React from 'react';
import classes from './FooterContent.module.css';
import PapeiLogo from '../../../Logo/PapeiLogo/PapeiLogo';
import Button from '../../../UI/Button/Button';

const footerContent = props => {
    return (
        <div className={classes.FooterContent}>
            <PapeiLogo/>
            <div>
                Ακολουθήστε μας:
                <a
                    href="https://github.com/konstantinosraptis91/maritime-nosql-frontend"
                    target="_blank"
                    rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="https://www.facebook.com/groups/1435532373324124"
                    target="_blank"
                    rel="noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
            </div>
            <div>
                <Button clicked={props.clicked}
                        btnType="Link">
                    Πολιτική Απορρήτου
                </Button>
            </div>
        </div>
    );
}

export default footerContent;