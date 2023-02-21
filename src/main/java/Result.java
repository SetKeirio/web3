import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.util.Objects;

@ManagedBean
public class Result implements Serializable, Cloneable {

    private static final long serialVersionUID = 1L;
    private Integer id;
    private Double x, y, R;
    private String inArea;

    public Result(){

    }

    public Result clone(){
        Result answer = new Result();
        answer.x = x;
        answer.y = y;
        answer.R = R;
        answer.inArea = inArea;
        return answer;
    }


    public void checkInArea(){
        inArea =  (inSquare() || inTriangle() || inCircle()) ? "Попал" : "Промазал";
    }
    private boolean inSquare(){
        return (x <= 0 && y <= 0 && x >= -R && y >= -R/2);
    }

    private boolean inTriangle(){
        return (x >= 0 && y <= 0 && y >= 2*x - R);
    }

    private boolean inCircle(){
        return (x >= 0 && y >= 0 && Math.sqrt(x*x + y*y) <= R/2);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getInArea() {
        return inArea;
    }

    public void setInArea(String inArea) {
        this.inArea = inArea;
    }
    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Double getR() {
        return R;
    }

    public void setR(Double r) {
        R = r;
    }

    @Override
    public int hashCode() {
        return getX().hashCode() + getY().hashCode() + getR().hashCode();
    }

    @Override
    public String toString() {
        return "Result: {x = " + getX() + "; y = " + getY() + "; r = " + getR() + "; inArea = " + getInArea() + "}";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o){
            return true;
        }
        if (o == null || getClass() != o.getClass()){
            return false;
        }
        Result result = (Result) o;
        return Objects.equals(x, result.x) && Objects.equals(y, result.y) && Objects.equals(R, result.R);
    }
}
