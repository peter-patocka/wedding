import React from 'react';
import { Field, Form, Formik } from 'formik';
import './InvitationForm.css';
import { Guest } from '../../types/entity/Guest';
import { Api } from "../api";
import { onFetchGuestsSuccess } from "../../store/guests/epics";
import { useNavigate } from "react-router-dom";

interface InvitationFormProps {
    onUpdate?: (rows: Guest[]) => void;
}

export const InvitationForm = (props: InvitationFormProps) => {

    const navigate = useNavigate();

    const onUpdate = (rows: Guest[]) => {
        alert('Thanks for your attendance!');
        if(rows.length > 0) {
            onFetchGuestsSuccess(rows);
            navigate("/invitation/"+ rows[0].invitation_code);
        }
    };

    return (
        <>
            <div id="fh5co-started" className="fh5co-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Are You Attending?</h2>
                            <p>Please Fill-up the form to notify you that you&apos;re attending. Thanks.</p>
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
                                            alert('Invitation code not found.');
                                        });
                                }}
                            >
                                <Form className="form-inline">
                                    <div className="col-md-4 col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="code" className="sr-only">Name</label>
                                            <Field type="text" name="code" className="form-control" placeholder="Invitation code" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <button type="submit" className="btn btn-default btn-block">I am Attending</button>
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
