import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;


@ManagedBean(name = "results")
@SessionScoped
public class ResultListBean implements Serializable {
    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    private Result result;

    public List<Result> getResults() {
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }

    private List<Result> results;

    public ResultListBean(){
        result = new Result();
        results = new ArrayList<>();
        connect();
        loadData();
    }

    private void connect(){


    }

    private void loadData(){

    }

    public void addResult() {
        Result add = new Result();
        result.checkInArea();
        add = result.clone();
        results.add(add);
    }

}
