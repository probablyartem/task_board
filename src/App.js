import React, {useState, useRef, useMemo, useEffect} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import TaskList from "./components/TaskList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import TaskForm from "./components/TaskForm";
import postItem from "./components/PostItem";
import MySelect from "./components/UI/select/MySelect";
import TaskFilter from "./components/TaskFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {useTasks} from "./hooks/useTasks";
import axios from "axios";
import TaskServices from "./API/TaskServices";
import {useFetching} from "./hooks/useFetching";
import {getPagesArray} from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Tasks from "./pages/Tasks";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
function App(factory, deps) {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="tasks" element={<Tasks />}/>

                <Route path="about" element={<About/>}/>

                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App;
