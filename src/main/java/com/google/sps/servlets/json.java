package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that responds with the current date. */
@WebServlet("/json")
public class json extends HttpServlet {

    
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String[] quote = {"If you are good at something, never do it for free.", 
    "The Pain of regret is worse than the pain of discipline.",
    "Every morning you have two choices, continue to sleep with your dreams, or wake up and chase them.",
    "No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.",
    "You only get one body... take care of it.",
    "Never reply when you are angry. Never make a promise when you are happy. Never make a decision when you are sad.",
    "If you want something you have never had, you must be willing to do something you have never done.",
    "It is okay to be weak. But it is not okay to stay weak."};

    
    Gson gson = new Gson();
    String json = gson.toJson(quote);
    
    
    response.setContentType("text/html;");
    response.getWriter().println(json);
  }
}
