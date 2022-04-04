import React from 'react';
import { Field, Form, Formik } from 'formik';
import './InvitationForm.css';
import { Guest } from '../../types/entity/Guest';
import { BRIDE, GROOM } from '../../data/constants';
import { Api } from "../api";
import { onFetchGuestsSuccess } from "../../store/guests/epics";
import { useNavigate } from "react-router-dom";

export const InvitationForm = () => {

    const navigate = useNavigate();

    const onUpdate = (rows: Guest[]) => {
        if(rows.length > 0) {
            onFetchGuestsSuccess(rows);
            navigate("/inv/"+ rows[0].invitation_code);
        } else {
            onError();
        }
    };

    const onError = () => {
        alert(`Your invitation code is probably not valid. Contact ${BRIDE} or ${GROOM}.`);
    };

    return (
        <>
            <div id="fh5co-started" className="fh5co-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Dostali ste pozvánku?</h2>
                            <p>Vyplňte následujúci formulár:</p>
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-10 col-md-offset-3">
                            <Formik
                                initialValues={{ code: "" }}
                                onSubmit={async (values) => {
                                    Api.acceptInvitation(values.code)
                                        .then(guests => {
                                            onUpdate(guests);
                                        })
                                        .catch(() => {
                                            onError();
                                        });
                                }}
                            >
                                <Form className="form-inline">
                                    <div className="col-md-4 col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="code" className="sr-only">Name</label>
                                            <Field type="text" name="code" className="form-control" placeholder="Kód pozvánky" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <button type="submit" className="btn btn-default btn-block">Odoslať</button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
