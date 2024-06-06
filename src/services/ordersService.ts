import { mockOrdersResponse } from "constants/mockResponse";

const orderService = {
    // Get all Services
    async getOrders() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve( 
                    {
                        count: 10, 
                        data: mockOrdersResponse,
                        status: 'Success'
                    }
                  );
            }, 500); // Simulate a 500ms delay
          });
    }

    // We can add more here...
}


export default orderService