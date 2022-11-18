import app from '../index';
import supertest from 'supertest';
import mongoose from 'mongoose';
const db_url='mongodb://localhost:27017/demo_test';
const request = supertest(app);

describe("Routes",()=>{
    beforeAll(()=>{
        mongoose.connect(db_url,()=>console.log('connectioned to test db server'),
            {
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
        )
    });
    const Dwarf = mongoose.connection.model("Dwarf");
})