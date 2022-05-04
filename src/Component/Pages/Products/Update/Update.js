import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

const {Id}=useParams()

    return (
        <div className='mt-16'>
                <h2>update {Id}</h2>
        </div>
    );
};

export default Update;