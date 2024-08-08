export { };
declare global{
     interface todo {
        id: string
        title: string
        completed: boolean
    }

     export type todos = todo[]



}