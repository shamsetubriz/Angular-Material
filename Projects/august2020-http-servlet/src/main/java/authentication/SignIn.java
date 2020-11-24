package authentication;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "SignIn", urlPatterns = "login")
public class SignIn extends HttpServlet {

    public String message;
    public void init()throws ServletException{
        System.out.println("................Servlet Initializing");
        message = "Welcome to the web world!";
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");

        PrintWriter printWriter =  response.getWriter();
        printWriter.println("<h1>"+ message + "<h1>");

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");

        String userName = request.getParameter("userName");
        String passWrd = request.getParameter("password");
        if(userName.equalsIgnoreCase("shams") && passWrd.equalsIgnoreCase("Password123")){
            PrintWriter printWriter = response.getWriter();
            printWriter.println("<h1>" + "You are Authorized user. Welcome!");
        }else {
            response.setContentType("text/html");

            PrintWriter printWriter = response.getWriter();
            printWriter.println("<h1>" + "You are not Authorized user.");
        }

    }

    public void destroy(){
        System.out.println("................Servlet s destroying now............");

    }







}
