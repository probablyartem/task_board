import React, {useMemo} from "react";

export const useSortedTasks = (tasks, sort) => {

    const sortedTasks = useMemo(() => {

        if(sort) {
            return [...tasks].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return tasks;
    }, [sort, tasks])


    return sortedTasks;
}

export const useTasks = (tasks, sort, query) => {
    const sortedTasks = useSortedTasks(tasks, sort);

    const sortedandsearchedTasks = useMemo(() =>{
        return sortedTasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedTasks])

    return sortedandsearchedTasks;


}