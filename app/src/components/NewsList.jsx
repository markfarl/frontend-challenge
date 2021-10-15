import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import NewsItem from '../components/NewsItem'
const aylienAPi = [
  {
  title: '123',
  text: 'ddeeefef',
  image: ''
},
  {
  title: '12dwdw3',
  text: 'ddeedwdwdwefef'
}
]

class NewsList extends Component {
    state = {
        newsItems: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getNewsItems()
    }
    getNewsItems = () => {
      this.setState({newsItems: aylienAPi})
    }
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getNewsItems()
    }
    render() {
        return (
            <div>
                { this.state.newsItems ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.newsItems.map(currentNews => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <NewsItem news={currentNews} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No news items found" }
            </div>
        )
    }
}
export default NewsList;
