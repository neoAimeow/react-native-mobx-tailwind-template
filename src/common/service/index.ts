import * as React from 'react';
import { configure } from 'mobx';

configure({ enforceActions: 'always' }); // 任何状态都能只能通过actions来修改，在实际开发中也包括新建状态。
export const services = {

};
export const servicesContext = React.createContext(services);
export const useService = () => React.useContext(servicesContext);

export const ServiceProvider = servicesContext.Provider;
