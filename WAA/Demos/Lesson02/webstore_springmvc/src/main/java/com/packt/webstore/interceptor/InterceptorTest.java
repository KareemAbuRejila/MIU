
package com.packt.webstore.interceptor;

        import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;

public class InterceptorTest extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler) throws Exception {

        System.out.println("A request was sent !");
        return true;
    }
}
