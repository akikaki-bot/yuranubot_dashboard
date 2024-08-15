export const Toast = ({ show , save , unSave} : { show : boolean , save : Function, unSave : Function }) => {
    return (
        <div style={{ opacity : show ? "1" : "0"}} className={`transition-all duration-200`}>
            <div className="fixed flex items-center top-12 right-5 space-x-4 w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow" role="alert">
                <div className="flex">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                        <svg style={{ animation : show ? "sugospin 2s ease-in-out" : "" }} className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                        </svg>
                        <span className="sr-only">Refresh icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">
                        <span className="mb-1 text-sm font-semibold text-gray-900">設定は保存されてません！</span>
                        <div className="mb-2 text-sm font-normal">今すぐ保存しますか？</div> 
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <button onClick={() => save()} className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 ">変更を保存</button>
                            </div>
                            <div>
                                <button onClick={() => unSave()} className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">変更を破棄</button> 
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}