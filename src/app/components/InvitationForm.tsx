import React from 'react';
import { Field, Form, Formik } from 'formik';
import './InvitationForm.css';
import { WeddingTable } from '../../types/entity/WeddingTable';

interface InvitationResult {
    result: string;
    num_rows_affected: number;
    rows_affected?: WeddingTable[]
}

export const InvitationForm = () => {

    const onUpdate = (rows: WeddingTable[]) => {
        alert('Thanks for your attendance!')
    };

    const onSubmit = (code: string) => {
        fetch("/api/invitation/"+code, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((json: InvitationResult) => {
                if(json.result == 'updated') {
                    onUpdate(json.rows_affected || []);
                } else {
                    alert('Invitation code is invalid.')
                }
            })
            .catch(() => {
                alert('Unable to accept invitation. Contact administrator.');
            })
    };

    return (
        <>
            <div id="fh5co-started" className="fh5co-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Are You Attending?</h2>
                            <p>Please Fill-up the form to notify you that you're attending. Thanks.</p>
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-10 col-md-offset-3">
                            <Formik
                                initialValues={{ code: "" }}
                                onSubmit={async (values) => {
                                    onSubmit(values.code);
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
