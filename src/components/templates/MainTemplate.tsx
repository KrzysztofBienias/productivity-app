import Sidebar from '../organisms/Sidebar/Sidebar';

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-screen h-screen 2xl:grid 2xl:grid-cols-[375px,_1fr] bg-gradient-to-tr from-[#CDDAFD] to-[#FAD2E1]">
            <div className="col-start-1 col-end-2">
                <Sidebar />
            </div>
            <div className="col-start-2 col-end-3 p-6">{children}</div>
        </div>
    );
};

export default PageTemplate;
